import { Client } from "./Client";

/**
 * クライアント管理クラス
 */
export class ClientManager {
  private clients: Client[] = [];

  /**
   * コンストラクタ
   */
  constructor() {
  }

  /**
   * クライアント追加
   * @param client クライアント
   */
  addClient(client: Client): void {
    this.clients.push(client);
    client.addEventListener("disconnected", () => {
      this.clients = this.clients.filter(c => c !== client);
    });
  }
}
