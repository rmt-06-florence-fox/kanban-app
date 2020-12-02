var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',     
      pageName: "Login Page",
      todo: "",
      todos: [],
      user: {
          email: "",
          password: ""
      }  
    },
    methods: {
        login(){
            console.log(this.user)
            localStorage.setItem('access_token', this.user.email)
            this.pageName = 'Main Page'
            this.user.email =''
            this.user.password = ''
        },
        logout(){
            localStorage.removeItem('access_token')
            this.pageName = 'Login Page'
        },
        fetchTodo(){
            axios({
                url: 'http://localhost:3000/todos',
                method: 'get'
            })
            .then(response => {
                console.log(response.data)
                this.todos = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    beforeCreate(){

    },
    created(){
        if(localStorage.getItem('access_token')){
            this.pageName = 'Main Page'
            this.fetchTodo()
        } else {
            this.pageName = 'Login Page'
        }
        console.log('test dari created')
    }
})