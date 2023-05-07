import { Client } from "./Client";
import * as WebSocket from "ws";

/**
 * クライアント管理クラス
 */
export class ClientManager {
  private clients: Client[] = [];
  private nextUuid: number = 1;
  
  /**
   * クライアント追加
   * @param socket WebSocketインスタンス
   * @return 生成されたクライアント
   */
  addClient(socket: WebSocket): Client {
    const client = new Client(socket, this.nextUuid++);
    this.clients.push(client);
    client.addEventListener("disconnected", () => {
      this.clients = this.clients.filter(c => c !== client);
    });

    return client;
  }
}
