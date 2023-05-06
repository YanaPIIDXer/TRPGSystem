import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import msgpack from "msgpack5";
const packer = msgpack();

export class PacketJoinResponse implements IPacket {
  constructor() {}

  
  get packetId(): EPacketId { return EPacketId.PACKET_JOIN_RESPONSE; }
  
  encode(): Buffer {
    const datas: any[] = [this.packetId];

    
    return packer.encode([datas]).slice();
  }

  decode(buffer: Buffer): void {
    [] = packer.decode(buffer);
  }
}
