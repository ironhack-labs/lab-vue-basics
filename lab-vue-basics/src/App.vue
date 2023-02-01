<template>
  <Nav/>
  <div>{{(2+2)}}</div>
  <p :class ="show" >Este texto es condicional</p>
  <p :class ="color">color</p>
  <button @click="changeColor">Cambiar color</button>
  <Footer/>
</template>

<script setup>
import {ref} from "vue"
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'

const show = ref ('show');
const color= ref ('color1')

function changeColor (){
  color.value = 'color2'
};
</script>

<style>
.show{
  display:block ;
}
.hidden{
  display: none;
}
.color1{
  background-color: blue;
}
.color2{
  background-color: brown;
}
</style>