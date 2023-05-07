/**
 * クライアントイベント基底クラス
 */
export abstract class ClientEvent extends Event {
  /**
   * コンストラクタ
   * @param eventName イベント名
   * @param _uuid UUID
   */
  constructor(eventName: string, private _uuid: number) {
    super(eventName);
  }

  /**
   * UUID
   */
  get uuid(): number { return this._uuid; }
}

export type ClientEventListener<T extends ClientEvent> = (event: T) => void;
