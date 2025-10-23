<template>
  <v-container>
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

import {Guid} from "guid-typescript";

const gameStorageService = inject('gameStorageService');
const gameStarterService = inject('gameStarterService');

if (IsGameLoaded()) {
  const router = useRouter();
  router.push('/game/world');
}

const FirstName = ref('');
const LastName = ref('');

function Save() {

  const factions = gameStarterService.GenerateStartingFactions();
  const regions = gameStarterService.GenerateStartingRegions(factions);

  gameStorageService.SaveFactions(factions);
  gameStorageService.SaveRegions(regions);

  gameStorageService.SavePlayerCharacter({
    Id: Guid.create(),
    FirstName: FirstName.value.trim(),
    LastName: LastName.value.trim(),
    AgeInMonths: 20 * 12
  });

  const router = useRouter();
  router.push('/game/world');
}

function IsGameLoaded() {
  const game = gameStorageService.LoadPlayerCharacter();
  return game !== null;
}

</script>
