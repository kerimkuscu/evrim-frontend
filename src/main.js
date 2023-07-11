import { createApp } from 'vue'
import 'bootstrap/scss/bootstrap.scss'
import './sass/app.scss'
import router from './router'
import App from './app.vue'

createApp(App).use(router).mount('#app')

