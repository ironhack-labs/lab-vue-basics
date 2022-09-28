<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Operations from "./components/Operations.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import List from "./components/List.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="routes-style">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About us</RouterLink>
    </div>
    <Operations />
    <List />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: black;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.routes-style {
  padding-top: 1rem;
  text-align: center;
}

footer {
  background-color: purple;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
