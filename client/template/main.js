var app = new Vue({
    el: '#app', // ini element (ini akan merender apapung yang ada dibawah id app)
    data: {
      message: 'Hello Vue!',
      pageName: "home-page",
      dataUser: {
        email: "",
        password: ""
      },
      dataUserRegister: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",

      }
    },
    methods: {
        changePage(value) {
            this.pageName = value
        },
        loginData() {
          // console.log(this.dataUser)
          axios({
            url: "http://localhost:3000/login",
            data: this.dataUser,
            method: "post"
          })
            .then(data => {
              // console.log(data.data.acces_token)
                const acces_token = data.data.acces_token
                localStorage.setItem("acces_token", acces_token)
                this.changePage("kanban-page")
                this.dataUser.email = ""
                this.dataUser.password = ""
            })
            .catch(err => {
                console.log(err)
            })
        },
        logOut() {
          localStorage.clear()
          this.changePage("home-page")
        },
        ifHomePage() {
            // return "home-page"
          // if(localStorage.getItem("acces_token")) {
          //   return "kanban-page"
          // } else {
          //   return "home-page"
          // }
        },
        registerData() {
          console.log(this.dataUserRegister)
          axios({
            url: "http://localhost:3000/register",
            data: this.dataUserRegister,
            method: "post"
          })
            .then(data => {
              // console.log(data.data.acces_token)
                
                this.changePage("form-login")
                this.dataUserRegister.email = ""
                this.dataUserRegister.password = ""
                this.dataUserRegister.firstName = ""
                this.dataUserRegister.lastName = ""
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
      if(localStorage.getItem("acces_token")) {
        this.pageName = "kanban-page"
      } else {
        this.pageName = "home-page"
      }
    }
  })