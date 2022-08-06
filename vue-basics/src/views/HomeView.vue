<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Iter2></Iter2>
    <Iter3></Iter3>
    <Iter4></Iter4>
  </div>
</template>

<script>
// @ is an alias to /src
import Iter2 from '@/components/Iter2.vue'
import Iter3 from '@/components/Iter3.vue'
import Iter4 from '../components/Iter4.vue'

export default {
  name: 'HomeView',
  components: {
    Iter2,
    Iter3,
    Iter4
}
}
</script>
