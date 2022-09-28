<template>
  <div>
    <nav>
      <img class="logo" src="../assets/logo.svg" alt="" />
      <a href="/">Home</a><a href="/about">About Us</a><a href="">Contact</a>
      <img class="logo" src="../assets/logo.svg" alt="" />
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.logo {
  height: 40px;
  width: 60px;
  padding: 3px;
}

nav {
  height: 50px;
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
</style>
