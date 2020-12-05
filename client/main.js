const {Vue} = require('vue')
import App from  "./components/App.vue"
console.log(Vue)
new Vue({
    render : h => h(App)
}).$mount("#app")