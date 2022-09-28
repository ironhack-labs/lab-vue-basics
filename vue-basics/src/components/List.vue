<template>
  <!-- Iteration 4 -->
  <div id="iterating-and-displaying-arrays-of-objects">
    <h3>List of main Frontend frameworks</h3>
    <ul class="list">
      <li v-for="(framework, index) in FrontendFrameworks" v-bind:key="index">
        {{ index }}. {{ framework.name }} ➯ Description:
        {{ framework.description }} ➯ Content:
        {{ framework.content }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const FrontendFrameworks = [
  {
    name: "Angular",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    content:
      "Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
  },
  {
    name: "React",
    description:
      "React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    content:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    name: "Vue",
    description:
      "VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces.",
    content:
      " It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer. It can be easily integrated into big projects for front-end development without any issues.",
  },
];
</script>

<style scoped>
h3 {
  color: red;
  text-decoration: underline;
  margin: 20px auto;
}

.list {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 3rem;
}
li {
  color: blue;
}
</style>
