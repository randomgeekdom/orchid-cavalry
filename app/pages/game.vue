<script setup lang="ts">

const NextButtonText = ref('Next Month');
const IsLoading = ref(false);


function Next(){
  IsLoading.value = true;

  setTimeout(() => {
    IsLoading.value = false;
  }, 5000);
}


function UploadGame() {
  // Upload Game
}

function DownloadGame() {
  // Download Game
}
</script>

<template>
  <v-layout>
    <v-app-bar >
      <v-app-bar-title>Orchid Cavalry</v-app-bar-title>

      <v-tabs :disabled="IsLoading">
        <v-tab prepend-icon="mdi-earth" to="/game/world">World</v-tab>
        <v-tab prepend-icon="mdi-account-multiple" to="/game/units">Units</v-tab>
        <v-tab prepend-icon="mdi-flag" to="/game/factions">Factions</v-tab>
      </v-tabs>

      <v-spacer/>

      <v-btn title="Upload Game" prepend-icon="mdi-arrow-collapse-up" :disabled="IsLoading" @click="UploadGame"/>
      <v-btn title="Download Game" prepend-icon="mdi-arrow-collapse-down" :disabled="IsLoading" @click="DownloadGame"/>
    </v-app-bar>

    <v-main  class="ma-2">
      <v-btn color="secondary" :disabled="IsLoading" @click="Next">
        <v-icon icon="mdi-clock"/>
        {{ NextButtonText }}
      </v-btn>
      <div v-if="IsLoading">
        <v-progress-circular indeterminate size="64"/>
      </div>
      <div v-else>
        <NuxtPage/>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped lang="sass">

</style>
