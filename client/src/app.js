import Vue from 'vue';
import app from './app.vue';
import axios from 'axios'

window.axios = axios

new Vue({
    render: h=> h(app)
}).$mount('#app');