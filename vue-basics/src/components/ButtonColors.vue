<template>
  <div>
    <h1 id="id">I change colors</h1>
    <button @click="changebackground()">Click me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const click = ref(true);

function changebackground() {
  document.getElementById("id").style.backgroundColor = "green";
  document.getElementById("id").style.color = "white";
}
</script>

<style scoped>
button {
  color: white;
  margin-top: 1rem;
  border-radius: 6%;
  border: none;
  background-color: rgb(53, 47, 209);
  padding: 10px;
}
button:hover {
  background-color: gold;
  color: black;
}
</style>
