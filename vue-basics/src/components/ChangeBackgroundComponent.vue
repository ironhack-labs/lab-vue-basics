<template>
  <div class="container" :style="{ backgroundColor: color }">
    <h1>Change background color with a button</h1>
    <button @click="color = getRandomColor()">Change color!🌈</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

let color = ref("black");

const getRandomColor = () => {
  const hexLetters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
.container {
  min-height: 20rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

h1 {
  mix-blend-mode: difference;
  color: white;
}
</style>
