<script setup lang="ts">
import { PacketJoinRequest } from "@yanap/trpg-common";

const socket = new WebSocket("ws://localhost:3000");
socket.onopen = (() => {
  console.info("Server connected.");
});
</script>

<template lang="pug">
</template>

<style lang="sass" scoped>
</style>
