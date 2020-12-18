var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    pageName : 'Login Page',
    user :{
      email : '',
      password : ''
    },
    registerUser:{
      email : '',
      password : ''
    }
  },
  methods :{
    changePage(pageName){
      this.pageName = pageName
    },
    async login(){
      try {
        const response = await axios({
          url : "http://localhost:3000/login",
          method : "post",
          data : this.user
        })
        swal({
          icon: "success",
          title: "Welcome",
          text : `${this.user.email}`
        })
        localStorage.setItem('access_token', response.data.access_token)
        this.pageName = 'Main Page'
      } catch (error) {
        swal({
          icon: "error",
          title: "error",
          text : error.response.data.message
        })
      } finally {
        this.user.email = '',
        this.user.password = ''
      }
    },
    logout(){
      localStorage.removeItem('access_token')
      this.pageName = 'Login Page'
    },
    async register(){
      console.log(this.registerUser);
      try {
        const newUser = await axios({
          url : "http://localhost:3000/register",
          method : "post",
          data : {
            email : this.registerUser.email,
            password : this.registerUser.password
          }
        })
        swal({
          icon: "success",
          title: "Welcome",
          text : "registration success"
        })
        this.pageName = 'Login Page'
      } catch (error) {
        console.log(error.response.data);
        const errors = error.response.data.map(e=> e.message)
        swal({
          icon : "warning",
          title : "Error",
          text : errors.join(', ')
        })
      } finally{
        this.registerUser.email = ""
        this.registerUser.password = ""
      }
    },
    async fetchTask(){
      try {
        const tasks = await axios({
          method : "get",
          url : 'http://localhost:3000/tasks',
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })
        console.log(tasks.data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created(){
    if(localStorage.getItem('access_token')){
      this.pageName = 'Main Page'
      this.fetchTask()
    }
  }
})