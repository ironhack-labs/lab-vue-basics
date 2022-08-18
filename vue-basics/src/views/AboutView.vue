<template>
  <div class="about">
    <h1>Welcome to the "about page" <br>
    you will find the pending 2 exercises here</h1>
    <section class="ejercicio3">
      <h2>Iteration 3</h2>
      <p>My favorite food is: </p>
      <p v-if="faveFood === true"> I love japanese food! Bring me the sushi! </p>
      <p v-show="faveFood === false"> I'm not so into food - I live on water and air </p>
    </section>
    <section class="ejercicio4">
      <h2>Iteration 4</h2>
      <p> This content is created inside the data  </p>
        <div class="projectCard" v-for="project in projects"
        :key="project.id">
        <h3>{{ project.title }}</h3>
        <h4>{{ project.description }}</h4>
        <h5>{{ project.content }}</h5>
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
          title: 'How to do lists in Vue?',
          description: 'Written by Jane Doe',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
        {
          id: 1,
          title: 'Using v-for with Objects',
          description: 'Written by John Doe',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
        {
          id: 2,
          title: 'How to do lists in Vue and not to go crazy in the process',
          description: 'Written by Maria Cassandra',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        },
      ],
    };
  },
};
</script>

<style>
  .projectCard {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    text-decoration: underline;
    padding-top: 2rem;
  }

  h3 {
    color: #42b983;
    padding: 0;
  }

  h4 {
    padding: 0;
    margin: 0;
  }

  h5 {
    font-style: oblique;
    padding: 0;
    margin: 0;
  }
</style>
