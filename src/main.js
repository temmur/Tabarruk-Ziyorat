import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugins } from './plugin'
import i18n from '@/plugins/i18n'

const app = createApp(App)
plugins(app)
app.use(i18n)
app.use(router)
app.mount('#app')


