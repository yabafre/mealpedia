import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

console.log(import.meta.env.BASE_URL)

createApp(App).use(router).mount('#app')