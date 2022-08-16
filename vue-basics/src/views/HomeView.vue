<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to the homepage"/>
    <section>
      <h2>Iteration 2</h2>
      <p>{{maths}}</p>
      <button @click="showMath"> Click here to reveal the answer </button>
    </section>
    <section>
      <h2>Iteration 3</h2>
      <p>It is {{statementIsTrue}} that I love ice cream.</p>
      <label>
        <input type="checkbox" v-model="statementIsTrue"/>
        Check out the Boolean function
      </label>
    </section>
    <section>
      <h2>Iteration 4</h2>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      maths: 'Can you resolve the math operation 2+2?',
      statementIsTrue: true,
    };
  },
  methods: {
    showMath() {
      this.maths = 'Here we go... the solution is 4';
    },
  },
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
button {
  margin-top: 20px;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #43d2ff;
  color: #072ac8;
  transform: scale(1.1);
  transition: 0.5s ease-in-out 0s;
}
</style>
