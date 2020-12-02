let basicUrl = "http://localhost:3000/"
let app = new Vue ({
  el: "#app",
  data: {
    pageName: "loginPage",
    userLogin : {
      email: null,
      password: null
    },
    loggedIn : {
      email: null
    },
    categories: null,
    tasks: null,
    task: {
      CategoryId: null,
      name: null,
      due_date: null
    }
  },
  methods: {
    changePage(page){
      this.pageName = page
    },
    getCategory(id){
      this.task.CategoryId = id
    },
    register(){
      axios({
        method: "post",
        url: `${basicUrl}user/register`,
        data: {
          email: this.userLogin.email,
          password: this.userLogin.password
        }
      })
      .then(response => {
        this.pageName = "loginPage"
        console.log(response)

      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.userLogin.email = ""
        this.userLogin.password = ""
      })
    },

    login(){
      console.log(this.userLogin)
      axios({
        method: 'post',
        url: `${basicUrl}user/login`,
        data: {
          email: this.userLogin.email,
          password: this.userLogin.password
        }
      })
        .then(response => {
          localStorage.setItem("access_token", response.data.access_token)
          this.loggedIn.email = this.userLogin.email
          this.getTasks()
          this.pageName = 'mainPage'
        })
        .catch(xhr => {
          console.log(xhr)
        })
        .finally(() => {
          this.userLogin.email = ""
          this.userLogin.password = ""
        })
    },

    getTasks(){
      axios({
        method: 'get',
        url: `${basicUrl}tasks/categories`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(response => {
          this.categories = response.data
          return axios ({
            method: 'get',
            url: `${basicUrl}tasks/`,
            headers: {
              access_token: localStorage.getItem("access_token")
            }
          })
        })
        .then(response => {
          for (let i = 0; i < response.data.length; i++){
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let year = response.data[i].due_date.slice(0, 4)
            let month = months[Number(response.data[i].due_date.slice(5, 7)) - 1]
            let date = response.data[i].due_date.slice(8, 10)
            response.data[i].due_date = `${date} ${month} ${year}`
          }
          this.tasks = response.data
        })
        .catch(xhr => {
          console.log(xhr)
        })
    },
    addTask(){
      axios({
        url: `${basicUrl}tasks/`,
        method: "post",
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title: this.task.name,
          due_date: this.task.due_date,
          CategoryId: this.task.CategoryId
        }
      })
      .then(response => {
        console.log(response)
        this.getTasks()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.task.name = null
        this.task.due_date = null
        this.task.CategoryId = null
      })
    },
    logout(){
      localStorage.removeItem("access_token")
      this.pageName = "loginPage"
    }
  },
  created: function (){
    if (localStorage.getItem("access_token")){
      this.getTasks()
      this.pageName = "mainPage"
    }
    else {
      this.pageName = "loginPage"
    }
  },
})