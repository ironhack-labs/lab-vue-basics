<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// --- ITERACIÓN 2: Variables reactivas y función ---
const nombre = ref("Alex");
const curso = ref("Frontend Bootcamp");

function obtenerSaludo() {
  return `Hola ${nombre.value}, bienvenido al módulo de Vue en ${curso.value}`;
}

// --- ITERACIÓN 3: Interruptor booleano ---
const mostrarMensaje = ref(true);

// --- ITERACIÓN 4: Lista de 3 posts ---
const posts = ref([
  {
    title: "Primer paso en Vue",
    description: "Entendiendo los componentes",
    content:
      "Los componentes nos permiten dividir la web en piezas fáciles de mantener.",
  },
  {
    title: "¿Qué es ref()?",
    description: "Datos que actualizan la pantalla solos",
    content:
      "Cuando cambias el valor de un ref, el HTML se actualiza al instante sin tocar el DOM.",
  },
  {
    title: "Directivas v-if y v-for",
    description: "Lógica sencilla dentro del HTML",
    content:
      "Con v-if mostramos u ocultamos cosas y con v-for repetimos elementos de una lista.",
  },
]);

// --- ITERACIÓN 5 (Bonus): Cambiar color de fondo con un botón ---
const esFondoActivo = ref(false);

function cambiarFondo() {
  esFondoActivo.value = !esFondoActivo.value;
}
</script>

<template>
  <!-- ITERACIÓN 1: Encajamos la barra superior -->
  <Navbar />

  <main class="contenedor">
    <!-- ITERACIÓN 2: Operación matemática y texto devuelto por función -->
    <section class="bloque">
      <h3>Iteración 2: Operaciones y funciones</h3>
      <p>
        Resultado de 2 + 2: <strong>{{ 2 + 2 }}</strong>
      </p>
      <p>{{ obtenerSaludo() }}</p>
    </section>

    <!-- ITERACIÓN 3: Mostrar elemento solo si es true -->
    <section class="bloque">
      <h3>Iteración 3: Condicional (v-if)</h3>
      <p v-if="mostrarMensaje" class="aviso">
        Este mensaje aparece porque la variable "mostrarMensaje" es true.
      </p>
    </section>

    <!-- ITERACIÓN 4: Pintar la lista de posts con v-for -->
    <section class="bloque">
      <h3>Iteración 4: Lista de publicaciones (v-for)</h3>
      <article v-for="(post, index) in posts" :key="index" class="tarjeta-post">
        <h4>{{ post.title }}</h4>
        <p class="subtitulo">{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </article>
    </section>

    <!-- ITERACIÓN 5 (Bonus): Cambiar fondo al pulsar el botón -->
    <section class="bloque" :class="{ 'fondo-especial': esFondoActivo }">
      <h3>Iteración 5 (Bonus): Cambio dinámico de color</h3>
      <p>Pulsa el botón para cambiar el color de fondo de esta caja.</p>
      <button @click="cambiarFondo">Cambiar color de fondo</button>
    </section>
  </main>

  <!-- ITERACIÓN 1: Encajamos el pie de página -->
  <Footer />
</template>

<style scoped>
.contenedor {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
}
.bloque {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;
}
.aviso {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 0.75rem;
  border-radius: 6px;
}
.tarjeta-post {
  background-color: #fafafa;
  border-left: 4px solid #42b883;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
}
.subtitulo {
  font-weight: bold;
  color: #666;
  font-size: 0.9rem;
}
.fondo-especial {
  background-color: #fff3cd;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background-color: #33a06f;
}
</style>
