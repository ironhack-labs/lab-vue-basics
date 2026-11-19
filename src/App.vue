<script setup>
import { ref } from 'vue'
import NavbarComponent from './components/NavbarComponents.vue'
import FooterComponent from './components/FooterComponents.vue'

// --- Iteración 2 ---
const nombre = ref('Ana')
const curso = ref('Vue 3')
const modulosCompletados = ref(2)

const generarMensaje = () => {
  return `Hola ${nombre.value}, estás avanzando genial en el curso de ${curso.value} (Iteración ${modulosCompletados.value}).`
}

// --- Iteración 3 ---
const mostrarElemento = ref(true)

const cambiarVisibilidad = () => {
  mostrarElemento.value = !mostrarElemento.value
}

// --- Iteración 4 ---
const publicaciones = ref([
  {
    id: 1,
    titulo: 'Introducción a Vue 3',
    descripcion: 'Primeros pasos creando componentes reutilizables',
    contenido: 'En esta publicación aprendimos a estructurar un proyecto con Vite y a separar el Navbar y el Footer.'
  },
  {
    id: 2,
    titulo: 'Reactividad con ref()',
    descripcion: 'Cómo manejar datos dinámicos en la plantilla',
    contenido: 'Usando ref() y la sintaxis de bigote podemos mostrar resultados de funciones y operaciones al instante.'
  },
  {
    id: 3,
    titulo: 'Directivas esenciales en Vue',
    descripcion: 'Renderizado condicional y listas con v-if y v-for',
    contenido: 'Las directivas nos permiten controlar qué se muestra en el HTML sin manipular el DOM manualmente.'
  }
])

// --- Iteración 5 (Bonus) ---

const esColorAlternativo = ref(false)


const cambiarColorFondo = () => {
  esColorAlternativo.value = !esColorAlternativo.value
}
</script>

<template>
  <NavbarComponent />

  <main>
    <h1>Bienvenido a mi laboratorio de Vue</h1>

    <!-- Iteración 2 -->
    <section>
      <h2>Iteración 2: Operaciones y funciones</h2>
      <p>El resultado de 2 + 2 es: {{ 2 + 2 }}</p>
      <p>{{ generarMensaje() }}</p>
    </section>

    <!-- Iteración 3 -->
    <section>
      <h2>Iteración 3: Renderizado condicional</h2>
      <p v-if="mostrarElemento">
        ¡Genial! Este mensaje solo se muestra porque la propiedad booleana está en true.
      </p>
      <button @click="cambiarVisibilidad">
        {{ mostrarElemento ? 'Ocultar mensaje (poner false)' : 'Mostrar mensaje (poner true)' }}
      </button>
    </section>

    <!-- Iteración 4 -->
    <section>
      <h2>Iteración 4: Lista de publicaciones</h2>
      <article v-for="publicacion in publicaciones" :key="publicacion.id">
        <h3>{{ publicacion.titulo }}</h3>
        <p><strong>Descripción:</strong> {{ publicacion.descripcion }}</p>
        <p>{{ publicacion.contenido }}</p>
      </article>
    </section>

    
    <section>
      <h2>Iteración 5 (Bonus): Cambiar color de fondo</h2>
      
      
      <div class="caja-color" :class="{ 'fondo-activo': esColorAlternativo }">
        <p>Pulsa el botón para cambiar el color de fondo de esta caja dinámicamente.</p>
      </div>

      <button @click="cambiarColorFondo">
        Cambiar color de fondo
      </button>
    </section>
  </main>

  <FooterComponent />
</template>

<style scoped>

.caja-color {
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #f3f4f6;
  color: #111827;
  transition: background-color 0.3s ease;
}


.fondo-activo {
  background-color: #3b82f6;
  color: #ffffff;
}
</style>
