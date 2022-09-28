<!-- Iteration 5 -->
<template>
  <div>
    <div>
      <h1 id="id">I change colors</h1>
      <button @click="changebackground()">Click me</button>
    </div>
    <!-- Add 1 -->
    <div>
      <h3>Add 1</h3>
      <button v-on:click="count++">Add 1</button>
      <p>Count is {{ count }}</p>
    </div>
    <!-- Class Iteration 1-->
    <div class="container" :class="changeColor ? 'is-red' : 'is-orange'">
      <h3>Descriptive Text</h3>
      <button @click="changeBackgroundColor()">Click me to toggle color</button>
    </div>
    <!-- Class Iteration - using a function to generate a random hex code -->
    <div class="container" :style="{ backgroundColor: color }">
      <h1>Change bg color randonmly with a button</h1>
      <button @click="color = getRandomColor()">Change color</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// add 1
const count = ref(0);

// mine
function changebackground() {
  document.getElementById("id").style.backgroundColor = "green";
  document.getElementById("id").style.color = "white";
}

// Class Iteration 1
const changeColor = ref(true);
// to toggle
function changeBackgroundColor() {
  return (changeColor.value = !changeColor.value);
  console.log("hello");
}

// Class Iteration - using a function to generate a random hex code
let color = ref("orange");

const getRandomColor = () => {
  console.log("clicked");
  // define hex values
  const hexLetters = "0123456789ABCDEF";
  // define # sign inside a variable as a string
  let color = "#";
  // iterate through the hexletters and get a 6 digits code that represent a color using a for loop, inside of which, we are going to join the variable that holds the # sign and a sequence of hexCodes that adds up to 6 digits
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
div {
  margin-bottom: 4rem;
}
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

h3 {
  color: red;
  text-decoration: underline;
  margin: 20px auto;
}

.container {
  min-height: 20 rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
}

.is-red {
  background-color: red;
}

.is-orange {
  background-color: orange;
}
</style>
