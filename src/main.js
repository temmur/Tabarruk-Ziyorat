import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue3Marquee from 'vue3-marquee'

createApp(App).use(Vue3Marquee).mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')
