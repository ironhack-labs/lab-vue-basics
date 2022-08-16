<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooTer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import FooTer from '@/components/FooTer.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
    FooTer,
  },
};
</script>
