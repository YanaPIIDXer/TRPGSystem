/**
 * パケット基底クラス
 */
export interface IPacket {
  /**
   * パケットID
   */
  get packetId(): number;

  /**
   * エンコード
   * @returns バッファ
   */
  encode(): Buffer;

  /**
   * デコード
   * @param buffer バッファ
   */
  decode(buffer: Buffer): void;
}
