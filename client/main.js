var app = new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        pageName: 'Login Page',
        email: '',
        password: '',
        name: '',
        nameOrganization: '',
        nameCategory: '',
        taskTitle: '',
        dueDate: ''
    },
    methods: {
        login() {
            axios({
                url: 'http://localhost:3000/login',
                method: 'POST',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                this.pageName = 'Main Page'
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
            .finally(() => {
                this.email = '',
                this.password = ''
            })
        },
        logout() {
            localStorage.clear()
            this.pageName = 'Login Page'
        }
    },
    created() {
        if (localStorage.getItem('access_token')) {
            this.pageName = 'Home Page'
        } else {
            this.pageName = 'Login Page'
        }
    }
})