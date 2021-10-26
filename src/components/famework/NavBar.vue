<template >
    <div v-show="!($store.state.galVal.isfullscreen || $route.meta.fullscreen)">
        <!-- header -->
        <header-bar></header-bar>
        <!-- footer -->
        <footer-bar></footer-bar>
    </div>
</template> 


<script lang="ts">

import { defineComponent } from 'vue';
// import { useStore } from "vuex";

import FooterBar from "./FooterBar.vue";
import HeaderBar from "./HeaderBar.vue";

export default defineComponent({
    name: 'NavBar',
    components: {
        FooterBar,
        HeaderBar
    },
    props: {
    },
    setup() {
    },
    data() {
        return {
            // store: useStore()
        }
    },
    created() {
    },
    mounted() {

    }
})

</script>




<style scoped>
</style>