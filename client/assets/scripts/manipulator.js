const server = 'http://localhost:3000'

let vue = new Vue({
    el : '#body',
    data : {
        token : localStorage.getItem('access_token'),
        page: "login",
        count : 0,
        message : null,
        email : "",
        password : ""

    },
    methods : {
        async login () {
            try{
                const response = await axios({
                    url : server + '/login',
                    method : 'POST',
                    data : {email : this.email, password : this.password}
                })
                //console.log(response)
                localStorage.setItem('access_token', response.data.access_token)
                this.email = null
                this.password = null
                this.page = 'content'
                
            } catch (err){
                this.page = "login"
                console.log(err.message)
            }
        },
        showRegisterPage (){
            this.token = null
            this.page = 'register'
        },

        //register handler here
        register(){

        },
        showLoginPage(){
            this.page = 'login'
        },
        //logout handler
        logout(){
            localStorage.removeItem("access_token")
            this.page = 'login'
        },
        
        addTask(){
            
        },
    },
    computed : {
        toLogin(){
            return this.page === 'login' 
        },
        toRegister(){
            return this.page === 'register'
        },
        toContent(){
            return this.page === 'content' 
        },
        checkToken(){
        
            if(this.token) return true
            return false
        }
    }


})