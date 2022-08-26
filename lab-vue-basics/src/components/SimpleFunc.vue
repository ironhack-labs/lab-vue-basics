<template>
  <h1 v-if="showText = false">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      showText: true,
      msg: 'What a nice day to code!',
    };
  },
};
</script>

<style>
</style>
