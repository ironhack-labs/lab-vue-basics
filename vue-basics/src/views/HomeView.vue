<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '../components/Navbar-comp.vue';
import Footer from '../components/Footer-comp.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Footer,
  },
};
</script>
