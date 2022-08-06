<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Iter2></Iter2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Iter2 from '@/components/Iter2.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Iter2
  }
}
</script>
