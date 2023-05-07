import { IPacket, EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ClientStateBase } from "./ClientStateBase";
import { Client } from "../Client";
import { RoomManager } from "../../room/RoomManager";
import { ClientJoinRoomEvent, ClientLeaveRoomEvent, clientRoomEventName } from "../events/RoomClientEvents";

/**
 * クライアントステート: ゲーム
 */
export class ClientStateGame extends ClientStateBase {
  /**
   * コンストラクタ
   * @param owner 所有者のクライアント
   */
  constructor (owner: Client) {
    super(owner);
    const room = RoomManager.instance.getRoom();
    room.addEventListener(clientRoomEventName.join, this.onJoinOther.bind(this) as EventListener);
    room.addEventListener(clientRoomEventName.leave, this.onLeaveOther.bind(this) as EventListener);
    room.join(this.owner);
  }
  
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  onHandlePacket(packet: IPacket): void {
    switch (packet.packetId) {
    }
  }

  /**
   * 終了処理
   */
  finalize() {
    const room = RoomManager.instance.getRoom();
    room.removeEventListener(clientRoomEventName.join, this.onJoinOther.bind(this) as EventListener);
    room.removeEventListener(clientRoomEventName.leave, this.onLeaveOther.bind(this) as EventListener);
    room.leave(this.owner);
  }

  /**
   * 他人が部屋に入ってきた
   * @param e イベント
   */
  private onJoinOther(e: ClientJoinRoomEvent) {
    console.info("JOIN CLIENT", e.context.uuid);
  }

  /**
   * 他人が部屋から退室した
   * @param e イベント
   */
  private onLeaveOther(e: ClientLeaveRoomEvent) {
    console.info("LEAVE CLIENT", e.context.uuid);
  }
}