<template>
  <div>
    <h1>This is simple sum</h1>
    <h3>Using a computed property</h3>
    <input pattern="\d*" maxlength="2" type="text" v-model="aNumber" />
    <span class="operand">+</span>
    <input pattern="\d*" maxlength="2" type="text" v-model="anotherNumber" />
    <div class="result">Result: {{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

let aNumber = ref("0");
let anotherNumber = ref("0");

const result = computed(() => {
  return parseInt(aNumber.value) + parseInt(anotherNumber.value);
});
</script>

<style scoped>
h3 {
  font-style: italic;
}

input {
  margin: 0.5rem;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;

  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 32px Arial, sans-serif;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

input {
  border-color: #41b88360;
}

input:focus {
  outline-color: #41b883ff;
}

.operand {
  font-size: 1.5rem;
}

.result {
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
