<template>
  <NavbarView />
  <router-view />
  <FooterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarView from "@/views/NavbarView.vue";
import FooterView from "@/views/FooterView.vue";

export default defineComponent({
  components: {
    NavbarView,
    FooterView,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
