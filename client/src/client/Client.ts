import { decode } from '@msgpack/msgpack';
import type { EPacketId, IPacket } from "@yanap/trpg-common";
import { instantiatePacket } from "@yanap/trpg-common";

/**
 * クライアントクラス
 */
export class Client {
  /**
   * コンストラクタ
   * @param socket WebSocketインスタンス
   */
  constructor(private socket: WebSocket) {
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
    console.info("Recv Packet", `ID: ${packetId}`);
    const packet = instantiatePacket(packetId);
    packet.decode(buffer);
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
