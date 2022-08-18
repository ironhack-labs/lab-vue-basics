<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
  <MyResult></MyResult>
  <MyList></MyList>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MyResult from "@/components/MyResult.vue";
import MyList from "@/components/MyList.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    MyResult,
    MyList,
  },
};
</script>
