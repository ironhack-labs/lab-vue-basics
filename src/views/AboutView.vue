<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p :class="changeClass ? 'background-color-twist' : ''">Suma={{2+2}}</p> <!-- ej. 2 y Bonus -->
    <h1 v-if="showMe">Oh yes, baby!</h1> <!-- ejercicio 3 -->
    <h1 v-else>Oh no 😢</h1>
    <ul id="example-1" >
      <li v-for="item in posts" :key="item.title" > <!-- ejercicio 4 -->
        {{ item.title }}
      </li>
    </ul>
    <p> Color will be: {{ color }}</p>
    <input v-model = "color" placeholder = "i want this color" /> <!-- Bonus Extra -->
    <button v-on:click = "changeBackgroundColor">ChangeColor</button>

  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$el.textContent); // Ejercicio 2
  },
  data() {
    return {
      changeClass: true,
      showMe: true,
      color: 'green',
      posts: [
        { title: 'post number 1', decription: 'description 1', content: 'content 1' },
        { title: 'post number 2', decription: 'description 2', content: 'content 2' },
        { title: 'post number 3', decription: 'description 3', content: 'content 3' },
        { title: 'post number 4', decription: 'description 4', content: 'content 4' },
      ],
    };
  },
  methods: {
    changeBackgroundColor() {
      this.changeClass = !this.changeClass;
      this.showMe = !this.showMe;
      document.querySelector('p').style.backgroundColor = this.color; // Bonus Extra
    },
  },
};
</script>
<style>
  .background-color-twist {
    background-color: black;
  }
</style>
