<script setup lang="ts">
import { provide } from "vue";
import { Client } from "./client/Client";

const socket = new WebSocket("ws://localhost:3000");
const client = new Client(socket);
provide("client", client);

</script>

<template lang="pug">
.root
  router-view
</template>

<style lang="sass" scoped>
</style>
