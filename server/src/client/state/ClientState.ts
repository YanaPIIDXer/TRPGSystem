import { IPacket } from '@yanap/trpg-common/Packet';
/**
 * クライアントステートインタフェース
 */
export interface IClientState {
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  onHandlePacket(packet: IPacket): void;
}
