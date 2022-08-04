<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/colors">Colors</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script setup lang="ts"></script>
<style>
nav {
  padding: 1rem;
  background-color: #41b88360;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
