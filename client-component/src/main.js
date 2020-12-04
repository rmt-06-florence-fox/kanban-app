import Vue from "vue"
import App from "./App.vue"
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueSimpleAlert from "vue-simple-alert"

Vue.config.productionTip = false
Vue.use(VueSimpleAlert)

new Vue ({
    GoogleSignInButton,
    render: h => h(App),
}).$mount("#app")