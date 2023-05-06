<script setup lang="ts">
const socket = new WebSocket("ws://localhost:3000");
socket.onopen = (() => {
  console.info("Server connected.");
});
</script>

<template lang="pug">
</template>

<style lang="sass" scoped>
</style>
