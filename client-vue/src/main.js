import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



new Vue ({
    GoogleSignInButton,
    render: h => h(App)
}).$mount('#app')