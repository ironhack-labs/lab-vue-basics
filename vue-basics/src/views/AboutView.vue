<template>
  <div class="about">
    <NavBar/>
    <h1>This is an about page</h1>
    <PostComp/>
    <FooTer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooTer from '@/components/FooTer.vue';
import PostComp from '@/components/PostComp.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    FooTer,
    PostComp,
  },
};
</script>
