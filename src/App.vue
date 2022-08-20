<template>
  <Header/>
  <Posts/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'App',
  components: {
    Header,
	Posts,
	Footer
  }
}
</script>

<style>

</style>
