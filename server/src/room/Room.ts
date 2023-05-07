import { Client } from "../client/Client";
import { ClientJoinRoomEvent, ClientLeaveRoomEvent } from "../client/events/RoomClientEvents";

/**
 * ルームクラス
 */
export class Room extends EventTarget {
  private clients: Map<number, Client> = new Map<number, Client>();

  /**
   * 参加
   * @param client クライアント
   */
  join(client: Client): void {
    this.clients.set(client.uuid, client);
    this.dispatchEvent(new ClientJoinRoomEvent(client));
  }

  /**
   * 退室
   * @param client クライアント 
   */
  leave(client: Client): void {
    this.dispatchEvent(new ClientLeaveRoomEvent(client));
    this.clients.delete(client.uuid);
  }
}
