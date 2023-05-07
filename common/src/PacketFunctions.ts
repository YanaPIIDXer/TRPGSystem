import { EPacketId } from "./packets/PacketId";
import { PacketJoinRequest } from "./packets/PacketJoinRequest";
import { PacketJoinResponse } from "./packets/PacketJoinResponse";
import { PacketSystemMessage } from "./packets/PacketSystemMessage";

export const instantiatePacket = (packetId: number) => {
  switch (packetId) {
    case EPacketId.PACKET_JOIN_REQUEST: return new PacketJoinRequest();
    case EPacketId.PACKET_JOIN_RESPONSE: return new PacketJoinResponse();
    case EPacketId.PACKET_SYSTEM_MESSAGE: return new PacketSystemMessage();
  }
  throw new Error(`Invalid Packet ID: ${packetId}`);
}
