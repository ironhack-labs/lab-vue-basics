<template>
  <Header />
  <p>{{ 2 + 2 }}</p>
  <p>{{ ChangeName() }}</p>
  <p v-if="awesome">It was true</p>
  <p v-else>It was false</p>
  <div class="beer">
    <div v-for="beer in beers">
        <img :src="beer.image_url" alt="Character image" />
        <h2>{{ beer.name }}</h2>
        <h3>{{ beer.ibu }}</h3>
    </div>
  </div>
  <h1 :class="color">I'm a text that can change color</h1>
  <button @click="changeColor">Change the color of the text</button>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {ref} from "vue";

let name = ref("Laura")
function ChangeName() {
    return name.value = "Paula";
}

let awesome = true;

const beers = ref([]);

async function getBeer() {
    const res = await fetch("https://api.punkapi.com/v2/beers?page=10&per_page=6");
    const finalRes = await res.json();
    beers.value = finalRes;
    console.log(beers.value)
}

getBeer();

let color = ref("red");

function changeColor() {
    color.value === "red" ? color.value = "blue" : color.value = "red"
}

</script>

<style scoped>
.red {
    background-color: red;
}

.blue {
    background-color: blue;
}
</style>
