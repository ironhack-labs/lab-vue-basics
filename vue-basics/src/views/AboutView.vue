<template>
  <div class="about">
    <Navbar/>
    <h1>This is an about page</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar-comp.vue';
import Footer from '../components/Footer-comp.vue';

export default {
  name: 'AboutView',
  components: {
    Navbar,
    Footer,
  },
};
</script>
