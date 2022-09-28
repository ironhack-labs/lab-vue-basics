<template>
  <div>
    <div>
      <!-- Iteration 2 Part 1 -->
      <h3>Math op inside HTML</h3>
      <p>The result of 2 + 2 is {{ sum() }}</p>
    </div>
    <div>
      <!-- Iteration 2 Part 2 -->
      <h3>Print a string into the template</h3>
      <p>The function returns this string: {{ print() }}</p>
    </div>
    <!-- Iteration 3  -->
    <div>
      <h3>Show an element only if a property is set to true</h3>
      <p v-if="isValid">I only show myself if my property is true</p>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from "vue";
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
