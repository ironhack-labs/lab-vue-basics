<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p>{{ 2 + 2}}</p>
  </div>
</template>
<script>
export default {
  name: 'MyFooter',
  data() {
    return {

    };
  },
};
</script>
