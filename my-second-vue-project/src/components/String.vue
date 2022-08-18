import StringPrint from '@/components/String.vue';
<template>
<div>
    <p class="cadena">{{StringPrint()}}</p>
</div>
</template>

<script>
export default {
  name: 'StringPrint',
  methods: {
    StringPrint() {
      return 'Hola, soy una cadena';
    },
  },
};
</script>

<style scoped>
    .cadena{
        color: black;
        padding: 20px;
        border: 2px solid lightgreen;
        border-radius: 20px;
        display: inline-block;
    }
</style>
