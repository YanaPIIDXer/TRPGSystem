import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import { encode, decode } from "@msgpack/msgpack";

export class PacketSystemMessage implements IPacket {
  constructor(private _message: string = "") {}

  get message(): string { return this._message; }
  
  get packetId(): EPacketId { return EPacketId.PACKET_SYSTEM_MESSAGE; }
  
  encode(): Uint8Array {
    const datas: any[] = [this.packetId as number];

    datas.push(this._message);
    
    return encode(datas);
  }

  decode(buffer: Uint8Array): void {
    const [_, message] = decode(buffer) as [number, string];
    this._message = message;
  }
}
