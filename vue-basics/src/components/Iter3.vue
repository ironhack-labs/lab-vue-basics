<template>
    <div>
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
  methods:{
    toggleSpan(){
        this.showSpan = !this.showSpan;
    }
  }
}
</script>

<style>

</style>