<template>
  <NavBar/>
  <router-view/>
  <FooterBar/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3b3c3d;
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
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
