import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugins } from './plugin'


const app = createApp(App)
plugins(app)
app.use(router)
app.mount('#app')
