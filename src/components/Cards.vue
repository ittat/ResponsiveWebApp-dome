<template>
  <!-- cards -->
  <div
    v-for="card in cardinfos"
    :key="card"
    style="margin-left: 1rem;
margin-right: 1rem; margin-top: 2rem; margin-bottom: 2rem;"
    class=""
  >
    <div class="card" style="border: 0px;height: min-content;">
      <!-- <div class="card-img placeholder card-img-top w-1" ></div> -->
      <div
        class="card-body"
        @click="toshortcut(card.url)"
        style="border-top-left-radius: 10px;
border-top-right-radius: 10px; background: #41a6e3;"
      >
        <h3 class="card-title placeholder col-12">{{ card.title }}</h3>
        <p class="card-text placeholder col-12">{{ card.desricibe }}</p>
        <a class="btn bg-white opacity-25">
          <i class="bi bi-tools placeholder">工具</i>
        </a>
      </div>
      <div
        class="card-footer"
        style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;"
      >
        <div class="row col align-items-center justify-content-center">
          <div class="row col-9 px-0">
            <div class="col-3">
              <img src="../../src/assets/userhead.png" class="img-fluid" />
            </div>
            <div class="col-9">
              <div class="row col-12 fw-bold text-start placeholder">{{ card.user.name }}</div>
              <div class="row col-12 fw-lighter text-start" style="font-size: small;">发布于 xxx 小时前</div>
            </div>
          </div>
          <div class="col-3 px-0">
            <a class="btn btn-primary fw-lighter btn-sm">安装捷径</a>
          </div>
        </div>
        <hr style="margin:.5rem" />
        <div class="row">
          <i class="bi bi-download col-4 d-flex justify-content-evenly align-items-center">32</i>
          <i class="bi bi-heart col-4 d-flex justify-content-evenly align-items-center">43</i>
          <i class="bi bi-chat col-4 d-flex justify-content-evenly align-items-center">342</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface UserData {
  name: String,
  id: Number,
  img: String
}


export interface CardInfo {
  title: String,
  desricibe: String,
  color?: String,
  url?: String,
  sorts?: String,
  user: UserData

}
// const sd :PropType<CardInfo>
export default defineComponent({
  name: "Cards",
  props: {
    cardinfos: Array as PropType<CardInfo[]>
  },
  methods: {
    toshortcut(url: "/") {
      this.$router.push(url)
    }
  }

})
</script>

<style scoped>
@media screen and (min-width: 1024px) {
 .card {
  width: calc(100vw / 3 - 3rem);
} 
}

@media screen and (max-width: 1024px) and (min-width: 750px) {
 .card {
  width: calc(100vw / 2 - 3rem);
} 
}

@media screen and (mIN-width: 400px) and (MAX-width: 750px) {
 .card {
  width: calc(100vw - 3rem);
} 
}


</style>