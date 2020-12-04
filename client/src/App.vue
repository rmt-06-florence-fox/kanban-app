<template>
  <div>
    <LoginRegisterPage
        v-if="pageName === 'Login-register-page'"
        @login="loginToHomePage"
        @register="registerUser"
        @googleToken="googleLogin"
    ></LoginRegisterPage>
    <HomePage
        @fetchTask="fetchTask"
        @logout="logoutFromHomePage"
        @changePage="ChangePage"
        @addTask="createTask"
        @destroyTask="deleteTask"
        @editForm="updateForm"
        @editTask="updateTask"
        :pageName="pageName"
        :tasks="tasks"
        :updating="updating"
        :categories="categories"
        v-else
    ></HomePage>
  </div>
</template>

<script>
    import LoginRegisterPage from "./components/LoginRegisterPage";
    import HomePage from "./components/HomePage";
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default {
        name: "App",
        data() {
            return {
                name: "Wellcome",
                pageName: "Login-register-page",
                tasks: [],
                updating: '',
                categories: [
                    {
                        name: 'Backlog',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Todo',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Doing',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Completed',
                        color: 'bg-dark',
                    }
                ]
            };
        },
        components: {
            LoginRegisterPage, HomePage
        },
        created() {
            if (!localStorage.getItem('access_token')) {
                this.pageName = 'Login-register-page'
            } else {
                this.pageName = 'Home-page'
            }
        },

        methods: {
            ChangePage(page) {
                this.pageName = page                
            },

            loginToHomePage(user) {
                axios({
                    url: "http://localhost:3000/login",
                    method: "POST",
                    data: { email: user.email, password: user.password },
                })
                .then((response) => {
                    localStorage.setItem("access_token", response.data.access_token);
                    localStorage.setItem("name", response.data.user.name)
                    this.pageName = "Home-page"
                })
                .catch((error) => {
                    Swal.fire('Login Failed',
                        `${error.response.data.message}`,
                        'error'
                    )                    
                })
            },

            logoutFromHomePage() {
                this.pageName = 'Login-register-page'
            },

            registerUser(user) {
                axios({
                    url: "http://localhost:3000/register",
                    method: "POST",
                    data: {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        },
                    })
                    .then((response) => {
                        Swal.fire(
                            'Register Success',
                            'Account is registered!',
                            'success'
                        )
                    })
                    .catch((error) => {
                        Swal.fire('Register Failed',
                            `${error.response.data[0].message}`,
                            'error'
                        )
                    })
                
            },
        
            fetchTask() {
                axios({
                    url: "http://localhost:3000/tasks",
                    method: "GET",
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    this.tasks = response.data.task
                })
                .catch(error => {
                    console.log(error)
                })
            },

            createTask(payload) {
                axios({
                    url: "http://localhost:3000/tasks",
                    method: "POST",
                    data: {
                        title: payload.title,
                        category: payload.category
                    },
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    Swal.fire(
                        'Done',
                        'Task Added!',
                        'success'
                    )
                    this.pageName = 'Home-page'
                    this.fetchTask()
                })
                .catch(error => {
                    Swal.fire('Failed',
                        `${error.response.data[0].message}`,
                        'error'
                    )
                })
            },

            deleteTask(id) {
                axios({
                    url: "http://localhost:3000/tasks/"+id,
                    method: "DELETE",
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    Swal.fire(
                        'Done',
                        'Task deleted!',
                        'success'
                    )
                    this.pageName = 'Home-page'
                    this.fetchTask()
                })
                .catch(error => {
                    Swal.fire('Unauthorized',
                        `${error.response.data.message}`,
                        'error'
                    )
                })
            },

            updateForm(id) {
                axios({
                    url: "http://localhost:3000/tasks/"+id,
                    method: "GET",
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    this.pageName = 'Edit-form'
                    this.updating = response.data                    
                })
                .catch(error => {
                    Swal.fire('Unauthorized',
                        `${error.response.data.message}`,
                        'error'
                    )
                })
            },

            updateTask(payload) {
                axios({
                    url: "http://localhost:3000/tasks/"+payload.id,
                    method: "PUT",
                    data: {
                        title: payload.title,
                        category: payload.category
                    },
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    Swal.fire(
                        'Done',
                        'Task Updated!',
                        'success'
                    )
                    this.pageName = 'Home-page'
                    this.fetchTask()
                })
                .catch(error => {
                    Swal.fire('Failed',
                        `${error.response.data[0].message}`,
                        'error'
                    )
                })
            },

            googleLogin(googleToken) {
                axios({
                    method: "POST",
                    url: "http://localhost:3000/googleLogin",
                    data: { googleToken }
                })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem("name", response.data.user.name)
                    this.pageName = "Home-page"
                })
                .catch(error => {
                    console.log(error)
                })
            },


        }
    }

    
            


</script>

<style>
</style>

