<script setup lang="ts">

  const isLoading = ref(true);

  inject('world', World);

  isLoading.value = false;

</script>

<template>
  <p>THIS IS THE WORLD LEVEL</p>
</template>

<style scoped lang="sass">

</style>