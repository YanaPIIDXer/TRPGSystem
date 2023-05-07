import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import { encode, decode } from "@msgpack/msgpack";

export class PacketJoinRequest implements IPacket {
  constructor(private _userName: string = "") {}

  get userName(): string { return this.userName; }
  
  get packetId(): EPacketId { return EPacketId.PACKET_JOIN_REQUEST; }
  
  encode(): Uint8Array {
    const datas: any[] = [this.packetId];

    datas.push(this._userName);
    
    return encode(datas);
  }

  decode(buffer: Buffer): void {
    const [_, userName] = decode(buffer) as [EPacketId, string];
    this._userName = userName;
  }
}
