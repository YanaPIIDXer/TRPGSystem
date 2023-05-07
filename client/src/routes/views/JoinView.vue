<script setup lang="ts">
import { EPacketId, PacketJoinRequest } from "@yanap/trpg-common";
import { ref, inject, onUnmounted } from "vue";
import type { Client, PacketEvent } from "../../client/Client";

const client = inject<Client>("client")!;
const userName = ref("");

const onRecvPacket = (e: PacketEvent) => {
  switch (e.packetId) {
    case EPacketId.PACKET_JOIN_RESPONSE:
      // TODO: 画面遷移
      alert(userName.value);
      break;
  }
};

client.addPacketEventListener(onRecvPacket);

/**
 * 参加
 */
const onJoin = () => {
  client.sendPacket(new PacketJoinRequest(userName.value));
};

onUnmounted(() => {
  client.removePacketEventListener(onRecvPacket);
});

defineExpose({
  userName,
  onJoin,
});
</script>

<template lang="pug">
.joinView
  h1 エントリー
  form(@submit.prevent="onJoin")
    input(type="text" v-model="userName" placeholder="ユーザ名を入力してください")
    br
    input(type="submit" value="参加" :disabled="!userName")
</template>

<style lang="sass" scoped>
</style>
