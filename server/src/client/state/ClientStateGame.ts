import { IPacket, EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ClientStateBase } from "./ClientStateBase";
import { Client } from "../Client";

/**
 * クライアントステート: ゲーム
 */
export class ClientStateGame extends ClientStateBase {
  /**
   * コンストラクタ
   * @param owner 所有者のクライアント
   */
  constructor (owner: Client, private userName: string) {
    super(owner);
  }
  
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  onHandlePacket(packet: IPacket): void {
    switch (packet.packetId) {
    }
  }
}