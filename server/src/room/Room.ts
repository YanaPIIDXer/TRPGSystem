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
    this.dispatchEvent(new ClientJoinRoomEvent(client));
    this.clients.set(client.uuid, client);
  }

  /**
   * 退室
   * @param client クライアント 
   */
  leave(client: Client): void {
    this.clients.delete(client.uuid);
    this.dispatchEvent(new ClientLeaveRoomEvent(client));
  }
}
