<script lang="ts" setup>
import {provide} from 'vue';
import {GameStorageService} from '~/services/GameStorageService';

provide('gameStorageService', new GameStorageService());
</script>

<template>
  <HelloWorld/>
</template>
