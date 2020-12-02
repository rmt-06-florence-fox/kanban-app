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
        },
        tasks: [],
        organization: '',
        categories: []
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
              .then((res) => {
                // handle 
                console.log(this.showPage)
                localStorage.setItem('access_token', res.data.access_token)
                this.getTaskList()
                this.showPage = 'pg-homepage'
              })
              .catch((error) => {
                // handle error
                console.log(error);
              })
              .then(_=> {
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
              .then((res) => {
                // handle success
                
                localStorage.setItem('access_token', res.data.access_token)
                this.getTaskList()
                this.showPage = 'pg-homepage'
              })
              .catch((error) => {
                // handle error
                console.log(error);
              })
              .then(_=> {
                // always executed
                this.registerForm.username = ''
                this.registerForm.email = ''
                this.registerForm.password = ''
              });
        },
        getTaskList () {
            
            axios({
              method: 'get',
              url: 'http://localhost:3000/org',
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            .then((res) => {
              // handle success
              console.log(res.data)

              this.organization = res.data.name
              res.data.Categories.forEach(el => {
                  this.categories.push(el.name)
              })

              // console.log(res.data[0].Organization.Categories)
              // res.data[0].Organization.Categories.forEach( el => {
              //   this.categories[el.id] = [el.id, el.name]
              // })
              // this.tasks = res.data
            })
            .catch((error) => {
              // handle error
              console.log(error);
            })
            .then(_=> {
              // always executed
              
            });
        }
    },
    created: function () {
        if (localStorage.getItem('access_token')) {
            this.showPage = 'pg-homepage'
            this.getTaskList()
        } else {
            this.showPage = 'pg-login'
        }
    }
  })

