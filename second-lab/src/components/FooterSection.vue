<template>
  <div>
    <p v-if='Cool'>Hope to see you later</p>
    <p v-else>Bye</p>
  </div>
  <ul>
    <li><a href="#">Sections</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      Cool: true,
    };
  },
};
</script>

<style>

</style>
