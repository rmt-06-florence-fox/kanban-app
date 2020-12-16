import Vue from "vue"
import App from "./App.vue"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import GoogleSignInButton from 'vue-google-signin-button-directive'
Vue.config.productionTip = false
Vue.use(VueSweetalert2);

new Vue({
    GoogleSignInButton,
    render: h => h(App) // h itu create element
}).$mount("#app")

