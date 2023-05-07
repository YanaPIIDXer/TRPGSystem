import type { IPacket } from '@yanap/trpg-common';
import { Client } from '../Client';
/**
 * クライアントステート基底クラス
 */
export abstract class ClientStateBase {
  /**
   * コンストラクタ
   * @param owner 所有者であるクライアント
   */
  constructor(protected owner: Client) {}
  
  /**
   * パケットハンドラ
   * @param packet パケット
   */
  abstract onHandlePacket(packet: IPacket): void;

  /**
   * 終了処理
   * デストラクタの代わり
   */
  finalize(): void {}
}
