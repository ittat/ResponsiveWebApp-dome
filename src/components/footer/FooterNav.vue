<template>
  
  <!-- <hr style="margin: 0.5rem;"/> -->
  <footer class="navbar fixed-bottom d-flex justify-content-around align-items-center" v-show="show">
      <div class="col-5 d-flex justify-content-around">
          <i class="bi bi-house fs-2 d-flex  flex-column align-items-center justify-content-around"><p class="fs-6">首页</p></i>
          <i class="bi bi-menu-app fs-2 d-flex  flex-column align-items-center justify-content-around"><p class="fs-6">捷径</p></i>
      </div>
      <div class="col-2 d-flex justify-content-center align-items-center">
          <i class="bi bi-plus-circle-fill text-primary fs-1"></i>
      </div>
      <div class="col-5 d-flex justify-content-around">
          <i class="bi bi-chat-dots fs-2 d-flex  flex-column align-items-center justify-content-around"><p class="fs-6">社区</p></i>
          <i class="bi bi-alarm fs-2 d-flex  flex-column align-items-center justify-content-around"><p class="fs-6">信息</p></i>
      </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";


// TODO
// global val footerPage <munber>
export default defineComponent({
    name: "FooterNav",
    props: {
        show: {
            type: Boolean,
            default: true
        }
    }
})


</script>

<style scoped>
p{
    margin-bottom: 0px;
}
</style>