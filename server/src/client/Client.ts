import { decode } from '@msgpack/msgpack';
import * as WebSocket from "ws";
import { ClientStateBase } from "./state/ClientStateBase";
import { ClientStateEntry } from "./state/ClientStateEntry";
import { EPacketId, IPacket, instantiatePacket } from "@yanap/trpg-common";

/**
 * クライアントクラス
 */
export class Client extends EventTarget {
  private state: ClientStateBase = new ClientStateEntry(this);
  
  /**
   * コンストラクタ
   * @param socket Socket
   * @param uuid UUID
   */
  constructor (private socket: WebSocket, private _uuid: number) {
    super();
    socket.on("close", () => {
      this.dispatchEvent(new Event("disconnected"));
    });
    socket.on("message", (data: ArrayBuffer | Uint8Array) => {
      const uint8Array = data instanceof Uint8Array ? data : new Uint8Array(data);
      const decodedData = decode(uint8Array) as Uint8Array;
      const packetId = decodedData[0] as EPacketId;
      const packet = instantiatePacket(packetId);
      packet.decode(uint8Array);
      this.state.onHandlePacket(packet);
    });
  }

  /**
   * UUID
   */
  get uuid(): number { return this._uuid; }

  /**
   * コンテキスト生成
   * @returns クライアントコンテキスト
   */
  makeContext(): ClientContext {
    return new ClientContext(this._uuid);
  }

  /**
   * パケット送信
   * @param packet パケット
   */
  sendPacket(packet: IPacket): void {
    const buffer = packet.encode();
    this.socket.send(buffer, (err) => {
      if (err) {
        console.error("Send Error", err.message);
      }
    });
  }

  /**
   * ステート切り替え
   * @param state ステート
   */
  changeState(state: ClientStateBase): void {
    this.state.finalize();
    this.state = state;
  }
}

/**
 * クライアントの情報
 * 外部参照用
 */
export class ClientContext {
  /**
   * コンストラクタ
   * @param _uuid UUID
   */
  constructor(private _uuid: number) {}

  /**
   * UUID
   */
  get uuid(): number { return this._uuid; }
}
