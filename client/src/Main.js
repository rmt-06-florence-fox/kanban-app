import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://localhost:3000/'
        })
    }
})
new Vue ({
    render: h => h(App),
}).$mount('#app');