import { Room } from "./Room";

/**
 * ルームマネージャ
 */
export class RoomManager {
  private static _instance: RoomManager = new RoomManager();
  public static get instance(): RoomManager { return this._instance; }
  
  private room: Room = new Room();
  
  /**
   * コンストラクタ
   * シングルトンなのでprivate
   */
  private constructor() {
  }

  /**
   * ルームを取得
   * @param name ルーム名（現状未使用）
   * @returns ルーム
   */
  getRoom(name: string = "") {
    return this.room;
  }
}