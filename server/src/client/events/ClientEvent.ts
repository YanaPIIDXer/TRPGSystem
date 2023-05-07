import { ClientContext } from "../Client";

/**
 * クライアントイベント基底クラス
 */
export abstract class ClientEvent extends Event {
  /**
   * コンストラクタ
   * @param eventName イベント名
   * @param _context クライアントコンテキスト
   */
  constructor(eventName: string, private _context: ClientContext) {
    super(eventName);
  }

  /**
   * クライアントコンテキスト
   */
  get context(): ClientContext { return this._context; }
}

export type ClientEventListener<T extends ClientEvent> = (event: T) => void;
