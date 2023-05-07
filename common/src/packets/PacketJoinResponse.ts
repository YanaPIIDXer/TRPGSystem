import type { IPacket } from "../Packet";
import { EPacketId } from "./PacketId";
import { encode, decode } from "@msgpack/msgpack";

export class PacketJoinResponse implements IPacket {
  constructor() {}

  
  get packetId(): EPacketId { return EPacketId.PACKET_JOIN_RESPONSE; }
  
  encode(): Uint8Array {
    const datas: any[] = [this.packetId as number];

    
    return encode(datas);
  }

  decode(buffer: Uint8Array): void {
    const [_, ] = decode(buffer) as [number, ];
  }
}
