<template>
  <div class="about">
    <h1>Welcome to the "about page" <br>
    you will find the pending 2 exercises here</h1>
    <section class="ejercicio3">
      <h2>Iteration 3</h2>
      <p>My favorite food is: </p>
      <p v-if="faveFood === true"> I love japanese food! </p>
      <p v-show="faveFood === false"> I'm not so into food - I live on water and air </p>
    </section>
    <section class="ejercicio4">
      <h2>Iteration 4</h2>
      <p> This content is created inside the data  </p>
        <div v-for="project in projects"
        :key="project.id">
        <h3>{{ projects.title }}</h3>
        <h4>{{ projects.description }}</h4>
        <h5>{{ projects.content }}</h5>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      faveFood: true,
      projects: [
        {
          id: 0,
          title: 'How to do lists in Vue',
          description: 'Jane Doe',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
        {
          id: 1,
          title: 'Using v-for with Objects',
          description: 'John Doe',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
        {
          id: 2,
          title: 'How to do lists in Vue and not to go crazy in the process',
          description: 'Maria Cassandra',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
      ],
    };
  },
};
</script>
