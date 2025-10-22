<script lang="ts" setup>
import {provide} from 'vue';
import {GameStorageService} from '~/services/GameStorageService';
import GameStarterService from "~/services/GameStarterService";

provide('gameStorageService', new GameStorageService());
provide('gameStarterService', new GameStarterService());
</script>

<template>
  <HelloWorld/>
</template>
