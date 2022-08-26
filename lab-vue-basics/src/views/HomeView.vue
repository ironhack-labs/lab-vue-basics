<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p> {{2 + 2}} </p>
    <SimpleFunc/>
    <ThreePosts/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SimpleFunc from '@/components/SimpleFunc.vue';
import ThreePosts from '@/components/ThreePosts.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SimpleFunc,
    ThreePosts,
  },
};
</script>
