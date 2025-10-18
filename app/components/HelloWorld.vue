<template>
  <v-container v-if="isGameLoaded" class="fill-height" max-width="900">
    <div>
      <v-img
          class="mb-4"
          height="150"
          src="~/assets/logo.png"
      />

      <div class="mb-8 text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <h1 class="text-h2 font-weight-bold">Vuetify</h1>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card
              class="py-4"
              color="surface-variant"
              image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
              prepend-icon="mdi-rocket-launch-outline"
              rounded="lg"
              variant="tonal"
          >
            <template #image>
              <v-img position="top right"/>
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">
                Get started
              </h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                test
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col v-for="link in links" :key="link.href" cols="6">
          <v-card
              append-icon="mdi-open-in-new"
              class="py-4"
              color="surface-variant"
              :href="link.href"
              :prepend-icon="link.icon"
              rel="noopener noreferrer"
              rounded="lg"
              :subtitle="link.subtitle"
              target="_blank"
              :title="link.title"
              variant="tonal"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
  <v-container v-else>
    <p>Long ago, a great evil threatened the world. Retired general Mastodon Van Orchid assembled a massive force that
      defeated the threat. As time passed, the need for this independent force diminished. Now, only a few members
      remain. As the new leader, what will you do to restore the the glory of the
    </p>
    <h1>
      <v-img src="~/assets/logo.png"/>
    </h1>
    <v-form>
      <v-text-field
          v-model="FirstName"
          label="Character First Name"
      />
    </v-form>
    <v-form>
      <v-text-field
          v-model="LastName"
          label="Character Last Name"
      />
      <v-btn :disabled="!FirstName?.trim() || !LastName?.trim()" @click="Save">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
const gameStorageService = inject('gameStorageService');

const isGameLoaded = ref(IsGameLoaded());

const FirstName = ref('');
const LastName = ref('');

function Save() {
  gameStorageService.SaveGame({
    FirstName: FirstName.value.trim(),
    LastName: LastName.value.trim(),
    FailureCount: 0,
    SuccessCount: 0,
    Loyalty: 100,
    Titles: []
  });

  isGameLoaded.value = IsGameLoaded();
}

function IsGameLoaded() {
  const game = gameStorageService.LoadGame();
  return game !== null;
}
</script>
