<template>
  <NavBar/>
  <SumOperation/>
  <StringPrint/>
  <IfCondition/>
  <MyPosts/>
  <ButtonSlot>
    Click me
  </ButtonSlot>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <FooterApp/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SumOperation from '@/components/SumOperation.vue';
import FooterApp from '@/components/FooterApp.vue';
import StringPrint from '@/components/String.vue';
import IfCondition from '@/components/IfCondition.vue';
import MyPosts from '@/components/VLoops.vue';
import ButtonSlot from '@/components/ButtonSlot.vue';

export default {
  components: {
    NavBar,
    FooterApp,
    SumOperation,
    StringPrint,
    IfCondition,
    MyPosts,
    ButtonSlot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
