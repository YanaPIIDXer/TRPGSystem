import { Client } from "../client/Client";

/**
 * ルームクラス
 */
export class Room {
  private clients: Map<number, Client> = new Map<number, Client>();

  /**
   * 参加
   * @param client クライアント
   */
  join(client: Client): void {
    this.clients.set(client.uuid, client);
  }

  /**
   * 退室
   * @param clientUuid クライアントのUUID 
   */
  leave(clientUuid: number): void {
    this.clients.delete(clientUuid);
  }
}
