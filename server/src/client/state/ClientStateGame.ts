import { IPacket, EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ClientStateBase } from "./ClientStateBase";
import { Client } from "../Client";
import { RoomManager } from "../../room/RoomManager";

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
    RoomManager.instance.getRoom().join(this.owner);
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
    RoomManager.instance.getRoom().leave(this.owner);
  }
}