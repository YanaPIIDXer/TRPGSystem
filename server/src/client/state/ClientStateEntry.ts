import { IPacket, EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ClientStateBase } from "./ClientStateBase";
import { Client } from "../Client";
import { ClientStateGame } from "./ClientStateGame";

/**
 * クライアントステート: 参加
 */
export class ClientStateEntry extends ClientStateBase {
  /**
   * コンストラクタ
   * @param owner 所有者のクライアント
   */
  constructor (owner: Client) {
    super(owner);
  }
  
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  onHandlePacket(packet: IPacket): void {
    switch (packet.packetId) {
      case EPacketId.PACKET_JOIN_REQUEST:
        {
          const p = packet as PacketJoinRequest;
          this.owner.changeState(new ClientStateGame(this.owner, p.userName));
          break;
        }
    }
  }
}