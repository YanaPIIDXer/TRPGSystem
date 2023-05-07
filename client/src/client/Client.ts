import { decode } from '@msgpack/msgpack';
import type { EPacketId, IPacket } from "@yanap/trpg-common";
import { instantiatePacket } from "@yanap/trpg-common";

/**
 * パケット受信イベント
 */
export class PacketEvent extends Event {
  /**
   * コンストラクタ
   * @param _packetId パケットID
   * @param buffer バッファ
   */
  constructor(private _packetId: EPacketId, private buffer: Uint8Array) {
    super("packet");
  }

  /**
   * パケットID
   */
  get packetId(): EPacketId { return this._packetId; }

  /**
   * パケットオブジェクト生成
   * @returns パケット
   */
  makePacket<T extends IPacket>(): T {
    const packet = instantiatePacket(this._packetId);
    if (packet.packetId !== this._packetId) { throw new Error("PacketType Not Matched") };
    packet.decode(this.buffer);
    return packet as T;
  }
}

type PacketEventListener = (event: PacketEvent) => void;

/**
 * クライアントクラス
 */
export class Client extends EventTarget {
  /**
   * コンストラクタ
   * @param socket WebSocketインスタンス
   */
  constructor(private socket: WebSocket) {
    super();
    this.socket.onmessage = this.onRecv.bind(this);
  }

  /**
   * 受信イベント
   * @param e イベント
   */
  async onRecv(e: MessageEvent): Promise<void> {
    const buffer = await new Promise<Uint8Array>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      }
      reader.onerror = reject;
      reader.onabort = reject;
      reader.readAsArrayBuffer(e.data);
    });
    const decodedBuffer = decode(buffer) as Uint8Array;
    const packetId = decodedBuffer[0] as EPacketId;
    this.dispatchEvent(new PacketEvent(packetId, buffer));
  }

  /**
   * パケットイベントリスナ追加
   * @param listener イベントリスナ
   */
  addPacketEventListener(listener: PacketEventListener) {
    this.addEventListener("packet", listener as EventListener);
  }

  /**
   * パケットイベントリスナ除去
   * @param listener イベントリスナ
   */
  removePacketEventListener(listener: PacketEventListener) {
    this.removeEventListener("packet", listener as EventListener);
  }

  /**
   * パケット送信
   * @param packet パケット
   */
  sendPacket(packet: IPacket): void {
    const buffer = packet.encode();
    this.socket.send(buffer);
  }
}
