<template>
  <div>
    <h1 :class="{ red: isRed }" @click="toggleRed">
      Clica y cambiare de color
    </h1>
    <p>El resultado de 2+2 es {{ 2 + 2 }}</p>
  </div>
</template>
<script>
export default {
  name: "MyResult",
  data() {
    return {
      isRed: false,
    };
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed;
    },
  },
};
</script>
<style>
.red {
  color: red;
}
p {
  color: blue;
}
</style>
