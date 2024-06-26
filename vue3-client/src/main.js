import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from '@/layouts/AppLayout.vue'

const app = createApp(App)
app.component('AppLayout', AppLayout)
app.use(router)

app.mount('#app')
