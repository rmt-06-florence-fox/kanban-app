import Vue from 'vue';
import app from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDraggable from "vuedraggable";


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Use vue draggable
Vue.use(VueDraggable);

new Vue({
    render: h=> h(app)
}).$mount('#app');