import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ttt, {add, subtract} from './stores/temp';
console.log((ttt));
const bigger = add(ttt, 1);
console.log(bigger);
const reducer = 2;
const smaller = subtract(ttt, reducer);
console.log(smaller);


import './assets/main.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


