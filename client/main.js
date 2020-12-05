import Vue from "vue";
import App from  "./components/App.vue"
console.log(Vue)
new Vue({
    render : h => h(App)
}).$mount("#app")