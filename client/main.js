new Vue({
    el : "#app",
    data : {
        msg : "hello Vue",
        onPage : "loginPage"
    },
    methods : {
        changePage(namePage) {
            console.log(namePage)
            return this.onPage = namePage
        }
    }
})