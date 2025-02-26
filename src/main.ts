import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.css"

import { createPinia } from 'pinia';
const pinia=createPinia()
app.use(pinia)

app.use(router)

app.mount('#app')
