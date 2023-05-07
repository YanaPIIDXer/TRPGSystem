import { decode } from '@msgpack/msgpack';
import * as WebSocket from "ws";
import { IClientState } from "./state/ClientState";
import { ClientStateEntry } from "./state/ClientStateEntry";
import { EPacketId, instantiatePacket } from "@yanap/trpg-common";

/**
 * クライアントクラス
 */
export class Client extends EventTarget {
  private state: IClientState = new ClientStateEntry();
  
  /**
   * コンストラクタ
   * @param socket Socket
   */
  constructor (private socket: WebSocket) {
    super();
    socket.on("close", () => {
      this.dispatchEvent(new Event("disconnected"));
    });
    socket.on("message", (data: ArrayBuffer | Uint8Array) => {
      const uint8Array = data instanceof Uint8Array ? data : new Uint8Array(data);
      const decodedData = decode(uint8Array) as Uint8Array;
      const packetId = decodedData[0] as EPacketId;
      const packet = instantiatePacket(packetId);
      packet.decode(uint8Array);
      this.state.onHandlePacket(packet);
    });
  }
}
