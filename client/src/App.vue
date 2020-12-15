<template>
    <div>
        <LoginPage 
            v-if="currentPage === 'login'" 
            @login="requestLogin"
            @movePage="changePage"
            @googleLogin="googleLogin"
        ></LoginPage>
        <RegisterPage
            v-else-if="currentPage === 'register'"
            @register="requestRegister"            
        ></RegisterPage>
        <Dashboard
            @addTask="addTask"
            @deleteTask="deleteTask"
            :tasks="tasks"
            :categories="categories"
            v-else-if="currentPage == 'home-page'"
            @fetchTask="fetchTask"
            @moveNext="moveNext"
            @logout="logout"
        ></Dashboard>
    </div>
</template>

<script>
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Dashboard from "./components/Dashboard"
import axios from 'axios'

export default {
    name:"App",
    data () {
        return {
            currentPage: "login",
            tasks: [],
            categories: ["Backlog", "Todo", "Doing", "Done"]
        }
    },
    components: {
        LoginPage,
        RegisterPage,
        Dashboard
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        requestLogin(payload) {
            axios({
                url: "https://kanban-app-deploy.herokuapp.com/login",
                method: "POST",
                data: payload
            })
                .then(({ data }) => {
                    console.log(data, '<<<< login')
                    localStorage.setItem("access_token", data.access_token)
                    this.currentPage = "home-page"
                    this.fetchTask()
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        requestRegister(payload) {
            console.log(payload)
            axios({
                url: "https://kanban-app-deploy.herokuapp.com/register",
                method: "POST",
                data: payload
            })
                .then(({ data }) => {
                    console.log(data, '<<<<<<<')
                    this.currentPage = "login"
                })
                .catch((err) => {
                    console.log(err.response, '<<<<<')
                })
        },
        googleLogin(idToken) {
            axios({
                url: "https://kanban-app-deploy.herokuapp.com/googleLogin",
                method: "POST",
                data: {
                    googleToken:idToken
                }
            })
                .then(({ data }) => {
                    
                    localStorage.setItem("access_token", data.access_token)
                    this.currentPage = "home-page"
                    this.fetchTask()
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        fetchTask() {
            const access_token = localStorage.getItem("access_token")
            axios({
                url: "https://kanban-app-deploy.herokuapp.com/tasks",
                method: "GET",
                headers: {
                    access_token
                }
            })
                .then(({ data }) => {
                    console.log(data, '<<<<<<< fetch')
                    this.tasks = data
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        addTask(payload2) {
            const access_token = localStorage.getItem("access_token")
            axios ({
                url: "https://kanban-app-deploy.herokuapp.com/tasks",
                method: "POST",
                data: payload2,
                headers: {
                    access_token
                },
            })
                .then(() => {
                    this.fetchTask();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        moveNext(data) {
            const access_token = localStorage.getItem("access_token")
            axios ({
                url: `https://kanban-app-deploy.herokuapp.com/tasks/${data.id}`,
                method: "PATCH",
                data: {
                    category: data.category
                },
                headers: {
                    access_token
                },
            })
                .then(() => {
                    this.fetchTask();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        deleteTask(id) {
            console.log('masuk delete')
            const access_token = localStorage.getItem("access_token")
            axios ({
                url: `https://kanban-app-deploy.herokuapp.com/tasks/${id}`,
                method: "DELETE",
                headers: {
                    access_token
                },
            })
                .then(() => {
                    this.fetchTask();
                })
                .catch((err) => {
                    console.log(err.response)
                })
        },
        logout() {
            localStorage.clear()
            this.currentPage = "login"
        },        
    },
    created() {
            if (localStorage.getItem("access_token")) {
                this.currentPage = "home-page"
                this.fetchTask()
            } else {
                this.currentPage = "login"
            }
    }
}
</script>

<style>

</style>