var app = new Vue({
    el: '#app',
    data: {
      atPage: 'loginPage',
      inputEmail: '',
      inputPassword: '',
      inputRegisterEmail: '',
      inputRegisterPassword: '',
      isRegister: false,
      tasks: [],
      SERVER: 'http://localhost:3000'
    },
    methods: {
        changePage(page) {
            console.log('tes change')
            this.atPage = page
        },
        showRegister(){
            this.changePage('registerPage')
        },
        hideRegister() {
            this.changePage('loginPage')
        },
        toAddForm() {
            this.changePage('addForm')
        },
        toEditForm() {
            this.changePage('editForm')
        },
        ready() {
            if(localStorage.getItem('access_token')) {
                this.atPage = 'homePage'
                this.fetchTask()
            }
            else {
                this.atPage = 'loginPage'
            }
        },
        login() {
            axios({
                method: 'POST',
                url: this.SERVER + '/login',
                data: {
                    email: this.inputEmail,
                    password: this.inputPassword
                }
            })
            .then(result => {
                console.log(result)
                localStorage.setItem('access_token', result.data.access_token)
                this.changePage('homePage')
            })
            .catch(error => {
                console.log(error)
            })
        },
        logout() {
            localStorage.clear()
            this.ready()
        },
        register() {
            axios({
                method: 'POST',
                url: this.SERVER + '/register',
                data: {
                    email: this.inputRegisterEmail,
                    password: this.inputRegisterPassword
                }
            })
            .then(result => {
                console.log(result)
                this.changePage('loginPage')
            })
            .catch(error => {
                console.log(error)
            })
        },
        fetchTask() {
            axios({
                method: 'GET',
                url: this.SERVER + '/tasks',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then((data) => {
                contole.log(data)
                this.tasks = data.data,
                this.ready()
            })
            .catch(error => {
                console.log(error)
            })
        },
        editTask(payload) {
            axios({
                method: 'PUT',
                url: this.SERVER + '/tasks/' + payload.id,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: payload.title,
                    category: payload.category
                }
            })
            .then(_=> {
                this.pageName= 'homePage'
                this.fetchTask()
                this.ready()
            })
            .catch(err => {
                console.log(err.response)
            })
        },
        addTodo(payload) {
            axios({
                method: 'POST',
                url: this.SERVER + '/tasks',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: payload.title,
                    category: payload.category
                }
            })
            .then((data) => {
                this.pageName = 'homePage'
                this.fetchTask()
                this.ready()
            })
            .catch(err => {
                console.log(err)
            })
        } ,
        destroy(payload) {
            axios({
                url: this.SERVER + '/tasks/' + payload.id,
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(data => {
                this.ready()
                this.fetchTask()
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.ready()
    }
  })