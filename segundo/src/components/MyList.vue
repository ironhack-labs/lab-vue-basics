<template>
  <button @click="show = !show">Mostrar una lista o un saludo</button>
  <ul v-if="show">
    <li v-for="item of list" :key="item">{{ item }}</li>
  </ul>
  <h2 v-else>{{ msg }}</h2>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      list: [1, 2, 3],
      msg: "Hola mundo",
    };
  },
};
</script>
<style>
li {
  list-style-type: none;
  color: blue;
}
</style>
