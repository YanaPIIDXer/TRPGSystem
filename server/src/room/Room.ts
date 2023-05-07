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
    this.dispatchEvent(new ClientJoinRoomEvent(client.uuid));
  }

  /**
   * 退室
   * @param clientUuid クライアントのUUID 
   */
  leave(clientUuid: number): void {
    this.dispatchEvent(new ClientLeaveRoomEvent(clientUuid));
    this.clients.delete(clientUuid);
  }
}
