<script setup lang="ts">

import type Leader from "~/models/characters/Leader";

// const props = defineProps<{
//   leader: Leader
// }>();

function round(value: number) {
  return Math.round(value);
}

</script>

<template>
  <v-card>
<!--    <v-card-title>{{ props.leader.FirstName }} {{ props.leader.LastName }}</v-card-title>-->
<!--    <v-card-text>-->
<!--      <p>Age: {{ round(props.leader.AgeInMonths / 12) }}</p>-->
<!--    </v-card-text>-->
  </v-card>
</template>

<style scoped lang="sass">

</style>