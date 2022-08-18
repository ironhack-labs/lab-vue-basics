<template>
  <div>
    <h1>This is the Navbar</h1>
    <ul class="menu" v-for='menu in menus' :key="menu.id">
      <li>{{ menu.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          id: 0,
          title: 'Home',
        },
        {
          id: 1,
          title: 'Projects',
        },
        {
          id: 2,
          title: 'Services',
        },
        {
          id: 3,
          title: 'Contact Us',
        },
      ],
    };
  },
};
</script>

<style>
  .menu {
    list-style: none;
  }
</style>
