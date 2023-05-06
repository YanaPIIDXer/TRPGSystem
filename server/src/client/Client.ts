import * as WebSocket from "ws";
import { IClientState } from "./state/ClientState";
import { ClientStateEntry } from "./state/ClientStateEntry";

/**
 * クライアントクラス
 */
export class Client extends EventTarget {
  private state: IClientState = new ClientStateEntry();
  
  /**
   * コンストラクタ
   * @param socket Socket
   */
  constructor (private socket: WebSocket) {
    super();
    socket.on("close", () => {
      this.dispatchEvent(new Event("disconnected"));
    });
    socket.on("message", (data: WebSocket.RawData) => {
      // TODO: パケット解析処理
    });
  }
}
