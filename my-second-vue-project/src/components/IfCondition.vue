<template>
  <article>
    <button v-show="signedIn">Hola, soy un v-if / v-show</button>
  </article>
</template>

<script>
export default {
  name: 'IfCondition',
  data() {
    return {
      signedIn: true,
    };
  },
};
</script>

<style scoped>
    button{
        color: black;
        border: 2px solid purple;
        padding: 20px;
        border-radius: 20px;
    }
</style>
