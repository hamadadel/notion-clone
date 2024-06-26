import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from '@/layouts/AppLayout.vue'

import '@/assets/css/index.css'

const app = createApp(App)
app.component('AppLayout', AppLayout)
app.use(router)

app.mount('#app')
