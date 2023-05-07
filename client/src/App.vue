<script setup lang="ts">
import { PacketJoinRequest } from "@yanap/trpg-common";
import { decode } from '@msgpack/msgpack';
import type { EPacketId } from "@yanap/trpg-common";
import { instantiatePacket } from "@yanap/trpg-common";

const socket = new WebSocket("ws://localhost:3000");
socket.onopen = (() => {
  const packet = new PacketJoinRequest("キャベツ 太郎");
  const buffer = packet.encode();
  socket.send(buffer);
});

socket.onmessage = async (e: MessageEvent<Blob>) => {
  const buffer = await new Promise<Uint8Array>(resolve => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(new Uint8Array(reader.result as ArrayBuffer));
    }
    reader.readAsArrayBuffer(e.data);
  });
  const decodedBuffer = decode(buffer) as Uint8Array;
  const packetId = decodedBuffer[0] as EPacketId;
  console.info("Recv Packet", `ID: ${packetId}`);
  const packet = instantiatePacket(packetId);
  packet.decode(buffer);
};

</script>

<template lang="pug">
</template>

<style lang="sass" scoped>
</style>
