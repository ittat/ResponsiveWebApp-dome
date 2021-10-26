<template>
  <div id="page" @scroll="scroll" class=" d-flex flex-wrap justify-content-around">
    <cards :cardinfos="testdata" ></cards>
  </div>
</template>



<script lang="ts">
import { useStore } from "vuex";


export default defineComponent({
  name: "HomePage",
  components: {
    Cards
  },
  data() {
    return {
      mainPageHeight: '',
      isfullscreen: useStore().state.galVal.isfullscreen,
      store: useStore()
    }
  },
  methods: {
    scroll(e) {
      const dHeight = e.target.scrollTop - this.mainPageHeight
      if (dHeight > 5) {
        // console.log("down")
        this.store.state.galVal.isfullscreen = true
      } else if (dHeight < 0) {
        // console.log("up")
        this.store.state.galVal.isfullscreen = false
      } else {
        // console.log("stay")
      }
      this.mainPageHeight = e.target.scrollTop


    }
  }
})

</script>


<script lang="ts" setup>
import { defineComponent, PropType, ref, watch } from "vue";
import Cards, { UserData, CardInfo } from "../Cards.vue";

const testdata: PropType<CardInfo[]> = [
  {
    title: "fsfs",
    sorts: "A",
    color:"yollow",
    url:'/shortcut/1',
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  },
  {
    title: "fsfs",
    sorts: "A",
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  }, {
    title: "fsfs",
    sorts: "A",
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  }, {
    title: "fsfs",
    sorts: "A",
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  }
  , {
    title: "fsfs",
    sorts: "A",
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  }, {
    title: "fsfs",
    sorts: "A",
    desricibe: "info fjksdfjsdkfjs kdsfjskdfjsd",
    user: {
      name: "dfsdfdsfs",
      img: "http://xx.com",
      id: 234234
    } as UserData
  }
]

</script>

<style >
#page {
  /* 确保scorll事件生效 */
  overflow-y: scroll;
  height: 100vh;

  /* 兼容性 */
  padding-top: 5rem;
}
</style>