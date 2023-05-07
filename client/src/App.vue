<script setup lang="ts">
import { PacketJoinRequest } from "@yanap/trpg-common";

const socket = new WebSocket("ws://localhost:3000");
socket.onopen = (() => {
  const packet = new PacketJoinRequest("キャベツ 太郎");
  const buffer = packet.encode();
  socket.send(buffer);
});
</script>

<template lang="pug">
</template>

<style lang="sass" scoped>
</style>
