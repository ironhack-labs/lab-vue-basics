<template>
  <div>
    <div>
      <!-- Iteration 2 Part 1 -->
      <h3>Math op inside HTML</h3>
      <p>The result of 2 + 2 is {{ 2 + 2 }}</p>
    </div>
    <div>
      <!-- Iteration 2 Part 2 -->
      <h3>Print a string into the template</h3>
      <p>The function returns this string: {{ print() }}</p>
    </div>
    <!-- Iteration 2 Part 3 Diego version -->
    <div>
      <h3>Simple sum of 2 numbers</h3>

      <input type="text" v-model="number1" />
      <span>+</span>
      <input type="text" v-model="number2" />
      <div>Results: {{ result }}</div>
    </div>
    <!-- Iteration 3  -->
    <div>
      <h3>Show an element only if a property is set to true</h3>
      <p v-if="isValid">I only show myself if my property is true</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
//  Iteration 2 Part 1
const sum = () => {
  const add = 2 + 2;
  return add;
};
console.log(sum);
//  Iteration 2 Part 2
const print = () => {
  return "Sayonara Baby";
};
console.log(print);
//  Iteration 3
const isValid = ref(true);

// Iteration 2 Diego Version
const number1 = ref("0");
const number2 = ref("0");

const result = computed(() => {
  return parseInt(number1.value) + parseInt(number2.value);
});
</script>

<style scoped>
h3 {
  color: red;
  text-decoration: underline;
  margin: 30px auto;
}
p {
  font-size: 30px;
  background-color: rgb(107, 214, 107);
}
</style>
