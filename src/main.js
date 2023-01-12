import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

import vue3GoogleLogin from 'vue3-google-login'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPersistedState)

const app = createApp(App)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: "",
});

app.mount('#app')
