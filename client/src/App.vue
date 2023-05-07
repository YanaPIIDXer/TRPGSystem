<script setup lang="ts">
import { inject } from "vue";
import { Client } from "./client/Client";

const socket = new WebSocket("ws://localhost:3000");
const client = new Client(socket);
inject("client", client);

</script>

<template lang="pug">
</template>

<style lang="sass" scoped>
</style>
