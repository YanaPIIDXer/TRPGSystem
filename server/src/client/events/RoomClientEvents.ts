import { Client } from "../Client";
import { ClientEvent } from "./ClientEvent";

/**
 * イベント名
 */
const eventNames = {
  join: "ClientJoin",
  leave: "ClientLeave",
};
export { eventNames as clientRoomEventName };

/**
 * クライアントが部屋に入った
 */
export class ClientJoinRoomEvent extends ClientEvent {
  /**
   * コンストラクタ
   * @param client クライアント
   */
  constructor(client: Client) {
    super(eventNames.join, client.makeContext());
  }
}

/**
 * クライアントが部屋から退室した
 */
export class ClientLeaveRoomEvent extends ClientEvent {
  /**
   * コンストラクタ
   * @param client クライアント
   */
  constructor(client: Client) {
    super(eventNames.leave, client.makeContext());  
  }
}
