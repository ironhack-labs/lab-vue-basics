<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: 'Teclado',
      price: 45,
      quantity: 2,
      isVisible: true,
      color: 'white',
      posts: [
        {
          id: 1,
          title: 'Primer post',
          description: 'Una descripción corta',
          content: 'Este post se pinta con v-for desde el array de posts.',
        },
        {
          id: 2,
          title: 'Segundo post',
          description: 'Otra descripción',
          content: 'Todos los posts salen del mismo array y la lista se actualiza sola.',
        },
        {
          id: 3,
          title: 'Tercer post',
          description: 'Última descripción',
          content: 'Con Vue no hace falta escribir el bucle a mano en el HTML.',
        },
      ],
    }
  },
  computed: {
    summary() {
      return `${this.quantity} x ${this.product} = ${this.quantity * this.price} €`
    },
  },
  methods: {
    addUnit() {
      this.quantity++
    },
    removeUnit() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    changeColor() {
      this.color = this.color === 'white' ? 'lightgreen' : 'white'
    },
  },
}
</script>

<template>
  <div>
    <Navbar />

    <main>
      <section class="card">
        <h1>LAB Vue.js Basics</h1>
        <p>Ejercicios del laboratorio con Vue 2.</p>
      </section>

      <section id="operaciones" class="card">
        <h2>Iteración 2: operaciones en el HTML</h2>
        <p>2 + 2 = {{ 2 + 2 }}</p>
        <p>{{ summary }}</p>
        <div class="controls">
          <button @click="removeUnit">-</button>
          <span>Cantidad: {{ quantity }}</span>
          <button @click="addUnit">+</button>
        </div>
      </section>

      <section id="condicional" class="card">
        <h2>Iteración 3: mostrar un elemento si es true</h2>
        <button @click="isVisible = !isVisible">
          {{ isVisible ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
        </button>
        <p v-if="isVisible">Este párrafo solo se ve cuando la propiedad vale true.</p>
      </section>

      <section id="posts" class="card">
        <h2>Iteración 4: lista de posts con v-for</h2>
        <article v-for="post in posts" :key="post.id" class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <p>{{ post.content }}</p>
        </article>
      </section>

      <section id="bonus" class="card">
        <h2>Bonus: cambiar el color de fondo</h2>
        <div class="color-box" :style="{ backgroundColor: color }">
          <p>Pulsa el botón para cambiar mi color de fondo.</p>
        </div>
        <button @click="changeColor">Cambiar color</button>
      </section>
    </main>

    <Footer />
  </div>
</template>
