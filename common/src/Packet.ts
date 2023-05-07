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
  encode(): Uint8Array;

  /**
   * デコード
   * @param buffer バッファ
   */
  decode(buffer: Uint8Array): void;
}
