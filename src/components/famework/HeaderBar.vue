<template>
    <header class="navbar fixed-top">
        <div
            class="container-fluid d-flex justify-content-around"
            style="margin-top:0.5rem; margin-bottom:0.5rem"
        >
            <a class="navbar-brand fs-1">Navbar</a>
            <div class="d-flex align-items-center justify-content-around">
                <button class="btn btn-outline-primary btn-sm" style="margin:0.5rem">DownLand</button>
                <i class="bi bi-search text-primary" style="margin:0.5rem"></i>
                <router-link to="/signin" class="text-primary" style="margin:0.5rem;text-decoration: none; color: black;">Sign In</router-link>
            </div>
        </div>

        <!-- TODO -->
        <!-- <div id="topNavBar" class="d-flex container-fluid justify-content-around">
            TODO 
        <v-slot></v-slot> + bootstarp - nav
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Disabled</a>
                </li>
            </ul>
        </div> -->
    </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'HeaderBar',
    mounted() {
        const topNavBars = document.querySelectorAll('#topNavBar ul li a')
        topNavBars.forEach((topNavBar) => {
            topNavBar.addEventListener('click', (e) => {
                topNavBars.forEach(topNavBar => {
                    topNavBar.classList.remove('active')
                });

                e.target.classList.add('active')

            })
        })


    }
})
</script>

<style>
</style>