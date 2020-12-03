var app = new Vue({
  el: '#app',
  data: {
    page:'login',
    signin_email: '',
    signin_password: '',
    signup_name: '',
    signup_email: '',
    signup_password: '',
    tasks: [],
    tasks_lists: [],
    url: 'http://localhost:3000'
  },
  methods: {

    changePage(newPage) {
      console.log(newPage)
      this.page = newPage
    },

    signinUser() {
      const payload = {
        email: this.signin_email,
        password: this.signin_password
      }

      axios({
        method: 'POST',
        url: this.url + '/signin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        localStorage.setItem('access_token', data.data.access_token)
        this.changePage('main')
        this.getAllTask()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.signin_email = ''
        this.signin_password = ''
      })
    },

    signupUser() {
      const payload = {
        name: this.signup_name,
        email: this.signup_email,
        password: this.signup_password
      }

      console.log(payload)

      axios({
        method: 'POST',
        url: this.url + '/signup',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        this.changePage('login')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        this.signup_name = ''
        this.signup_email = ''
        this.signup_password = ''
      })
    },

    signUpForm() {
      this.changePage('register')
    },

    logOutUser() {
      localStorage.clear()
      this.changePage('login')
    },

    getAllTask() {
      axios({
        method: "GET",
        url: this.url + '/tasks',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(data => {
        console.log(data)
        this.tasks = []
        this.tasks_lists = []
        data.forEach(el => {
          this.tasks.push(el)
        })
        tasks.forEach(el => {
          this.tasks_lists.push(tasks)
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created: function() {
    if(localStorage.getItem('access_token')) {
      this.page = 'main'
      this.getAllTask()
    } else {
      this.page = 'login'
    }
  }
})