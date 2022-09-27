<template>
  <div>
    <footer>
      <img class="logo" src="../assets/logo.svg" alt="" />
      <a href="">Home</a><a href="">About Us</a><a href="">Contact Us</a>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
footer {
  width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: purple;
}

.logo {
  height: 30px;
}
</style>
