<template>
    <span>{{ msg }}</span>
    <br/>
    <span>{{ addition }}</span>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      addition: 2 + 2,
      msg: 'Welcome',
    };
  },

  computed: {
    propertyComputed() {
      console.log('I change when this.property changes');
      return this.property;
    },
  },

  created() {
    this.property = 'Example property update';
    console.log('propertyComputed will update, as this.property is now reactive.');
  },
};
</script>
