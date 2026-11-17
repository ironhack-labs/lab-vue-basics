<template>
  <nav class="navbar">
    <h2>Mi Web en Vue</h2>
    <ul>
      <li>Inicio</li>
      <li>Artículos</li>
      <li>Contacto</li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
