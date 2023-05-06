import { IPacket } from "@yanap/trpg-common/Packet";
import { EPacketId } from "@yanap/trpg-common/packets/PacketId";
import { IClientState } from "./ClientState";
import { PacketJoinRequest } from "@yanap/trpg-common/packets/PacketJoinRequest";

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