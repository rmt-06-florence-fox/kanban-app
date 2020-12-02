// 

var app = new Vue ({
    el: '#app',
    data: {
        showPage: 'pg-login',
        loginForm: {
            email: '',
            password: ''
        },
        registerForm: {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        goTo (page) {
            this.showPage = page
        },
        login () {
            axios({
                method: 'post',
                url: 'http://localhost:3000/login',
                data: {
                  email: this.loginForm.email,
                  password: this.loginForm.password
                }
              })
              .then(function (res) {
                // handle success
                localStorage.setItem('access_token', res.data.access_token)
                this.showPage = 'pg-homepage'
                
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
                this.loginForm.email = ''
                this.loginForm.password = ''
              });
        },
        register () {
            axios({
                method: 'post',
                url: 'http://localhost:3000/register',
                data: {
                  username: this.registerForm.username,
                  email: this.registerForm.email,
                  password: this.registerForm.password
                }
              })
              .then(function (res) {
                // handle success
                localStorage.setItem('access_token', res.data.access_token)
                this.showPage = 'pg-homepage'
                
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
                this.registerForm.username = ''
                this.registerForm.email = ''
                this.registerForm.password = ''
              });
        }
    },
    created: function () {
        if (localStorage.getItem('access_token')) {
            this.showPage = 'pg-homepage'
        } else {
            this.showPage = 'pg-login'
        }
    }
  })

