import { createApp } from 'vue'
import App from './App.vue'

import globalStore from "./store/index.js"
import router from "./router/index.js";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'https://code.jquery.com/jquery-3.6.0.min.js'

createApp(App).use(globalStore).use(router).mount('#app')
