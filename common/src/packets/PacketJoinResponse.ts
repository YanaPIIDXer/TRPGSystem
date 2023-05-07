import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import { encode, decode } from "@msgpack/msgpack";

export class PacketJoinResponse implements IPacket {
  constructor() {}

  
  get packetId(): EPacketId { return EPacketId.PACKET_JOIN_RESPONSE; }
  
  encode(): Uint8Array {
    const datas: any[] = [this.packetId];

    
    return encode(datas);
  }

  decode(buffer: Buffer): void {
    const [_, ] = decode(buffer) as [EPacketId, ];
  }
}
