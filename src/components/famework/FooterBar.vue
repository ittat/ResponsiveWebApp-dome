<template>
    <footer
        id="footer_bar"
        class="navbar fixed-bottom d-flex justify-content-around align-items-center bg-white"
    >
        <div class="col-5 d-flex justify-content-around">
            <router-link to="/home" style="text-decoration: none; color: black;">
                <i
                    id="home"
                    class="bi bi-house fs-2 d-flex flex-column align-items-center justify-content-around text-primary"
                >
                    <p class="fs-6">首页</p>
                </i>
            </router-link>
            <router-link to="/shortcuts" style="text-decoration: none; color: black;">
                <i
                    id="shortcuts"
                    class="bi bi-menu-app fs-2 d-flex flex-column align-items-center justify-content-around"
                >
                    <p class="fs-6">捷径</p>
                </i>
            </router-link>
        </div>
        <i
            class="bi bi-plus-circle-fill text-primary fs-1 col-2 d-flex justify-content-center align-items-center"
        ></i>
        <div class="col-5 d-flex justify-content-around">
            <i
                id="community"
                class="bi bi-chat-dots fs-2 d-flex flex-column align-items-center justify-content-around"
            >
                <p class="fs-6">社区</p>
            </i>
            <i
                ld="messages"
                class="bi bi-alarm fs-2 d-flex flex-column align-items-center justify-content-around"
            >
                <p class="fs-6">信息</p>
            </i>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'FooterBar',
    data() {
        return {
            pages: ref<NodeListOf<Element>>()
        }
    },
    mounted() {
        this.pages = document.querySelectorAll('#footer_bar div a i')
    },
    methods: {
        update(id) {
            // 先全部移除text-primary
            this.pages.forEach((page) => {
                page.classList.remove("text-primary")
            })

            //给点击的page加上text-primary
            document.getElementById(id).classList.add("text-primary")
        }

    },
    watch: {
        $route: {
            handler(to, from) {
                console.log(to.meta.mainpage + "   " + from.meta.mainpage)
                this.update(to.meta.mainpage)

            },
            deep: true

        }
    }
})
</script>

<style scoped>
footer p {
    margin-bottom: 0px;
}
</style>