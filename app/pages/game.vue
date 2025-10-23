<script setup lang="ts">
function UploadGame() {
  // Upload Game
}

function DownloadGame() {
  // Download Game
}
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title>Orchid Cavalry</v-app-bar-title>

      <v-tabs>
        <v-tab prepend-icon="mdi-earth" to="/game/world">World</v-tab>
        <v-tab prepend-icon="mdi-account-multiple" to="/game/units">Units</v-tab>
        <v-tab prepend-icon="mdi-flag" to="/game/factions">Factions</v-tab>
      </v-tabs>

      <v-spacer/>

      <v-btn title="Upload Game" prepend-icon="mdi-arrow-collapse-up" @click="UploadGame"/>
      <v-btn title="Download Game" prepend-icon="mdi-arrow-collapse-down" @click="DownloadGame"/>
    </v-app-bar>

    <v-main>
      <NuxtPage/>
    </v-main>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
