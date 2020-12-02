var app = new Vue({
  el: '#app',
  data: {
    page:'login',
    signin_email: '',
    signin_password: '',
    signup_name: '',
    signup_email: '',
    signup_password: '',
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
      console.log(payload)

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
      })
      .catch(err => {
        console.log(err)
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
        console.log(data)
        this.changePage('login')
      })
      .catch(err => {
        console.log(err)
      })
    },
    signUpForm() {
      this.changePage('register')
    },
    logOutUser() {
      localStorage.clear()
      this.changePage('login')
    }
  }
})