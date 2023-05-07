<script setup lang="ts">
import { ref, inject } from "vue";
import type { Client } from "../../client/Client";

const client = inject<Client>("client")!;
const userName = ref("");

/**
 * 参加
 */
const onJoin = () => {
  alert(userName.value);
}

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
    input(type="submit" value="参加")
</template>

<style lang="sass" scoped>
</style>
