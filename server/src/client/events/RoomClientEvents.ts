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
   * @param uuid UUID
   */
  constructor(uuid: number) {
    super(eventNames.join, uuid);
  }
}

/**
 * クライアントが部屋から退室した
 */
export class ClientLeaveRoomEvent extends ClientEvent {
  /**
   * コンストラクタ
   * @param uuid UUID
   */
  constructor(uuid: number) {
    super(eventNames.leave, uuid);  
  }
}
