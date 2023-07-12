import { createApp } from 'vue'
import 'bootstrap/scss/bootstrap.scss'
import './sass/app.scss'
import router from './router'
import App from './app.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

//Vue i18n
import { createI18n } from 'vue-i18n'
import tr from './lang/tr';
import en from './lang/en';
let userLang = navigator.language || navigator.userLanguage;
let userlangText = userLang.substring(0, 2);
let locale = userlangText;
const i18n = createI18n({
    locale,
    messages: locale === 'tr' ? tr : en,
})

createApp(App).use(router).use(i18n).mount('#app')

