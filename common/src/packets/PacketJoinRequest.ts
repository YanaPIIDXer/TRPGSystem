import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import msgpack from "msgpack5";
const packer = msgpack();

export class PacketJoinRequest implements IPacket {
  constructor(private _userName: string = "") {}

  get userName(): string { return this.userName; }
  
  get packetId(): EPacketId { return EPacketId.PACKET_JOIN_REQUEST; }
  
  encode(): Buffer {
    const datas: any[] = [this.packetId];

    datas.push(this._userName);
    
    return packer.encode([datas]).slice();
  }

  decode(buffer: Buffer): void {
    [this._userName] = packer.decode(buffer);
  }
}
