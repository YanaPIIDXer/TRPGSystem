import * as WebSocket from "ws";

/**
 * クライアントクラス
 */
export class Client extends EventTarget {
  /**
   * コンストラクタ
   * @param socket Socket
   */
  constructor (private socket: WebSocket) {
    super();
    socket.on("close", () => {
      this.dispatchEvent(new Event("disconnected"));
    });
  }
}