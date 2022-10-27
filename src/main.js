import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/styles.scss'

import router from './router'
import { Vue3Mq } from "vue3-mq";

const app = createApp(App);
app.use(Vue3Mq);
app.use(router)
app.mount("#app");



