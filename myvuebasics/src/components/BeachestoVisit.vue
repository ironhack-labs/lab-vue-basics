<template>
  <ul  class ="beachlist" v-for="beach in beaches" :key="beach.title">
    <li :class ="beachColor">{{
      beach.title
    }}</li>
    <li>{{beach.description}}</li>
    <li>{{beach.content}}</li>
  </ul>
  <button @click='colorchange'>Change the title color</button>
</template>

<script>
export default {
  name: 'BeachestoVisit',
  data() {
    return {
      beaches: [
        { title: 'Barra:', description: 'Nice beach in Portugal', content: '(Many km of white sand)' },
        { title: 'Gerra:', description: 'Beatiful beach in Cantabria', content: '(A lot of parking spaces around)' },
        {
          title: 'Ribadesella:',
          description: 'Famous town village in Asturias',
          content: '(Very touristic)',
        },
      ],
      beachColor: 'titlecolor',
    };
  },
  methods: {
    colorchange() {
      this.beachColor = 'titlecolordos';
    },
  },
};
</script>

<style>
.beachlist {
  list-style: none;
}
.titlecolordos {
  color:blue;
}
</style>
