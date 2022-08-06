<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        text-align: center;
        font-size: 25px;
        background-color: chartreuse;
        padding: 30px 0;
    }
    nav a {
        text-decoration: none;
        color: cornflowerblue;
        padding: 0px 10px;
    }

    nav a.router-link-active{
        color: red;
    }
</style>