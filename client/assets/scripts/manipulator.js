let vue = new Vue({
    el : '#body',
    data : {
        page:"login",
        count : 0
    },
    methods : {
        trial ()  {
            this.count++
        },
        //Login Handler here
        login () {

        },
        showRegisterPage (){
            this.page = "register"
        },

        //register handler here
        register(){

        },
        showLoginPage(){
            this.page="login"
        },
        //logout handler
        logout(){
            localStorage.removeItem("access_token")
        },
        
        addTask(){
            
        }
    }

})