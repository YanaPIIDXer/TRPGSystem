<script setup lang="ts">
import { EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ref, inject, onUnmounted } from "vue";
import type { Client, PacketEvent } from "../../client/Client";

const client = inject<Client>("client")!;

const onRecvPacket = (e: PacketEvent) => {
  switch (e.packetId) {
  }
};

client.addPacketEventListener(onRecvPacket);


onUnmounted(() => {
  client.removePacketEventListener(onRecvPacket);
});

defineExpose({
});
</script>

<template lang="pug">
.gameView
</template>

<style lang="sass" scoped>
</style>
