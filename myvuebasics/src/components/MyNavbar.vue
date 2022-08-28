<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p>{{ 2 + 2 }}</p>
    <p>{{ createdstring }}</p>
    <button v-show="!signedIn">Sign In</button>
    <button v-show="signedIn">Sign Out</button>
  </nav>
</template>
<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      createdstring: '',
      signedIn: true,
    };
  },
  created() {
    this.createdstring = 'This sting is created by a function';
  },
};
</script>
