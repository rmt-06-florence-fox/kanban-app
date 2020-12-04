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
                    console.log(error);
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
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log("register success");
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
                    console.log('success add data')
                    this.pageName = 'Home-page'
                    this.fetchTask()
                })
                .catch(error => {
                    console.log(error)
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
                    this.pageName = 'Home-page'
                    this.fetchTask()
                    console.log('success to delete')
                })
                .catch(error => {
                    console.log(error)
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
                    console.log(error)
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
                    this.pageName = 'Home-page'
                    this.fetchTask()
                    console.log('success to delete')
                })
                .catch(error => {
                    console.log(error)
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

