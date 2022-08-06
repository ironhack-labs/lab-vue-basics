<template>
    <div>
        <h1>Iteration 2. Sum result = {{ 2 + 2 }}</h1>
        <h2>{{onCompute}}</h2>
        <div>
            <button @click="toggleSpan">Toggle span</button>
            <span v-if="showSpan">I'm a SPAN</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return{
        showSpan: true
    }
  },
  computed:{
    onCompute(){
        return "From onCompute() function";
    }
  },
  methods:{
    toggleSpan(){
        this.showSpan = !this.showSpan;
    }
  }
}
</script>

<style>

</style>