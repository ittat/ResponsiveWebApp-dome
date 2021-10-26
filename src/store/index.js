import { Store } from "vuex";


const globalStore =  new Store({})

globalStore.registerModule("galVal", {
    state:{
        isfullscreen: false
        // currentNavPage: 'home_page',
    }
})

export default globalStore