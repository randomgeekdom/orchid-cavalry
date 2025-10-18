<script lang="ts" setup>
import {provide} from 'vue';
import {RankService} from '~/services/RankService';
import {GameStorageService} from '~/services/GameStorageService';

provide('rankService', new RankService());
provide('gameStorageService', new GameStorageService());
</script>

<template>
  <HelloWorld/>
</template>
