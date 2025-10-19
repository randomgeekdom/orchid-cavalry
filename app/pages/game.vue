<script setup lang="ts">

</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title>Orchid Cavalry</v-app-bar-title>

      <v-tabs>
        <v-tab prepend-icon="mdi-earth" to="/game/world">World</v-tab>
        <v-tab prepend-icon="mdi-account-multiple" to="/game/shared">Units</v-tab>
        <v-tab prepend-icon="mdi-flag" to="/game/starred">Factions</v-tab>
      </v-tabs>

      <v-spacer/>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
