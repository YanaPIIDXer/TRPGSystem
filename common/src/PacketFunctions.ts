import { EPacketId } from "./packets/PacketId";
import { PacketJoinRequest } from "./packets/PacketJoinRequest";
import { PacketJoinResponse } from "./packets/PacketJoinResponse";

export const instantiatePacket = (packetId: number) => {
  switch (packetId) {
    case EPacketId.PACKET_JOIN_REQUEST: return new PacketJoinRequest();
    case EPacketId.PACKET_JOIN_RESPONSE: return new PacketJoinResponse();
  }
  throw new Error(`Invalid Packet ID: ${packetId}`);
}
