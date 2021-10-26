
<script lang="ts">
import NavBar from "./components/famework/NavBar.vue"
import HomePage from "./components/main/HomePage.vue"
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    NavBar,
    HomePage
  },
  data() {
    return {
      isfullscreen: false
    }
  },
  methods: {
  }
};
</script>


<template>
  <nav-bar></nav-bar>
  <!-- TODO router view -->
  <router-view></router-view>
  <!-- <div  style="width:100vw;height:4rem;z-index:-1;" class=""></div> -->
  <!-- <home-page></home-page>      -->
</template>



<style >

</style>