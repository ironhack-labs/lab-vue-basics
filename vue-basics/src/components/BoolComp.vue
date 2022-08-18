<template>
  <div>
    <button @click='cold = !cold'>Toggle</button>
    <h2 v-if='cold'>It's so cold!!!</h2>
    <h2 v-else>OMG, I'm melting!!!</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cold: true,
    };
  },
};
</script>
