import { IPacket } from "@yanap/trpg-common/Packet";
import { EPacketId } from "@yanap/trpg-common/packets/PacketId";
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
  }
}