<template>
  <div class="about">
    <NavBar/>
    <h1>This is an about page</h1>
    <FooTer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooTer from '@/components/FooTer.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    FooTer,
  },
};
</script>
