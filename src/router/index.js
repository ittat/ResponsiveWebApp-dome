import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";

import homePage from '../components/main/HomePage.vue'
import shortCuts from '../components/main/ShortCuts.vue'
import ShortCut from '../components/main/ShortCut.vue'
import SignIn from '../components/main/SignIn.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            name: "home",
            path: '/home',
            component: homePage,
            meta: {
                mainpage: 'home',
                fullscreen: false,
                headcolor:'white'
            }
        },
        {
            name: 'shortcuts',
            path: '/shortcuts',
            component: shortCuts,
            meta: {
                mainpage: 'shortcuts',
                fullscreen: false,
                headcolor:'white'
            }
        }, 
        {
            name: 'shortcut',
            path: '/shortcut/:id',
            component: ShortCut, 
            meta: {
                mainpage: 'shortcuts',
                fullscreen: false,
                headcolor:'white'
            }
        },
        {
            name:'signin',
            path:'/signin',
            component:SignIn,
            meta:{
                mainpage:'home', //?
                fullscreen:true,
                headcolor:'white'
            }
        }

    ]
})