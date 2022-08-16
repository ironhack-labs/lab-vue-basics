<template>
  <div class="about">
    <h1>Welcome to the "about page" <br>
    you will find the pending 2 exercises here</h1>
    <section class="ejercicio3">
      <h2>Iteration 3</h2>
      <p>My favorite food is: </p>
      <p v-if="faveFood === true"> I love japanese food! </p>
    </section>
    <section class="ejercicio4">
      <h2>Iteration 4</h2>
      <p> The footer links are created inside the data of Footer component  </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      faveFood: true,
    };
  },
};
</script>
