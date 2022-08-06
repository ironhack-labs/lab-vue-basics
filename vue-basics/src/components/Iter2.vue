<template>
    <div>
        <h1>Iteration 2. Sum result = {{ 2 + 2 }}</h1>
        <h2>{{onCompute}}</h2>
    </div>
</template>

<script>
export default {
  data() {

  },
  computed:{
    onCompute(){
        return "From onCompute() function";
    }
  }
}
</script>

<style>

</style>