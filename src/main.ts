import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createPinia } from 'pinia'
import VueAxios from 'vue-axios';
import axios from 'axios';

const pinia = createPinia()
const app = createApp(App)

app.use(VueSweetalert2)
app.use(VueAxios, axios)
app.use(pinia)
app.use(router)

app.mount('#app')
