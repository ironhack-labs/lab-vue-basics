<template>
    <button @click="CambiarColor()" class="button-slot">
    <slot/>
    </button>
</template>

<script>
export default {
  methods: {
    CambiarColor() {
      return 'yellow';
    },
  },
};
</script>

<style scoped>
    .button-slot {
        display: block;
        color: #fff;
        background: linear-gradient(315deg, #42d392 25%, #647eff);
        border: none;
        padding: 20px;
        margin-left: 0 auto;
        margin-right: 0 auto;
        border-radius: 8px;
        cursor: pointer;
    }
    .yellow{
        background-color: yellow;
    }
</style>
