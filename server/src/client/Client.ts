import * as WebSocket from "ws";
import { IClientState } from "./state/ClientState";
import { ClientStateEntry } from "./state/ClientStateEntry";
import { instantiatePacket } from "@yanap/trpg-common/PacketFunctions";

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
    socket.on("message", (data: string | Buffer) => {
      const buffer = Buffer.from(data);
      const packetId = buffer.readUint8(0);
      const packet = instantiatePacket(packetId);
      packet.decode(buffer);
      this.state.onHandlePacket(packet);
    });
  }
}
