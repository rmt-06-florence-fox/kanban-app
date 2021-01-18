
let baseUrl = 'http://localhost:3000'
var vm = new Vue({
    el: "#app",
    data:{
        error: '',
    pageName: "login page",
    entryPage: true,
    userLogin: {
        email: '',
        password: ''
    },
    userRegister: {
        email: '',
        password: ''
    }
    },
    methods:{
        register(){
            this.pageName = "register page"
        },
        registSubmit(){
            if(!this.userRegister.email || !this.userRegister.password){
                swal(" Empty Form Bro / Sis !","email & password can't be empty", "error")
                
            } else {
                axios({
                    method: 'post',
                    url: `${baseUrl}/register`,
                    data:{
                    email: this.userRegister.email,
                    password: this.userRegister.password
                    }
                })
                .then(response =>{
                    // console.log(response.data, '<<<----')
                    swal("Register Success","please Login", "success")
                    this.pageName = "login page"
                })
                .catch(err =>{
                    this.error = "try another email/password"
                    setTimeout(()=>{
                        this.error = ""
                    }, 4000)
                    console.log(err)
                })
                .finally(_=>{
                    this.error = ''
                    this.userRegister.email = ''
                    this.userRegister.password = ''
                })

            }
        },
        login(){
            this.pageName = "login page"
            this.entryPage = true
        },
        loginSubmit(){
            axios({
                method: 'post',
                url: `${baseUrl}/login`,
                data:{
                    email: this.userLogin.email,
                    password: this.userLogin.password
                }
            })
            .then(response =>{
                // console.log(response.data, '<<<----')
                localStorage.setItem('access_token', response.data.access_token)
                swal("Login Success","you can use Kanban Board Now", "success")
                this.pageName = "main page"
                this.entryPage = false
                
            })
            .catch(err =>{
                swal("Invalid Account", "try again", "error")
                console.log(err)
            })
            .finally(_=>{
                this.userLogin.email = ''
                this.userLogin.password = ''
            })
        },
        mainPage(){
            this.pageName = "main page"
            this.entryPage = false
        },
        logout(){
            localStorage.clear()
            this.login()
        }
    },

    created(){
        if(localStorage.getItem('access_token')){
            this.mainPage()
        } else {
            this.login()
        }
    }

})