<template>
    <div class="navbar">
        <h1>This is my navbar</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String,
  },
};
</script>
