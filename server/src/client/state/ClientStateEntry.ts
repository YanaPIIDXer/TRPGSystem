import { IPacket, EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { IClientState } from "./ClientState";

/**
 * クライアントステート: 参加
 */
export class ClientStateEntry implements IClientState {
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  onHandlePacket(packet: IPacket): void {
    switch (packet.packetId) {
      case EPacketId.PACKET_JOIN_REQUEST:
        {
          const p = packet as PacketJoinRequest;
          console.info("Join User", p.userName);
          break;  
        }
    }
  }
}