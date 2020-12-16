<template>
    <div>
        <NavBar
            :logoutbtn="pageName"
            @logout="logout"
        ></NavBar>
        <Login v-if="pageName === 'Login Page'"
            @RegisterPage="changePage"
            @loginpage="login"
            @GoogleLogin="googleLogin"
        ></Login>
        <Register v-else-if="pageName === 'Register Page'"
            @LoginPage="changePage"
            @register="register"
        ></Register>
        <AddForm v-else-if="pageName === 'Add Form'"
            @MainPage="changePage"
            @CreateTask="createTask"
            :category="category"
        ></AddForm>
        <EditForm v-else-if="pageName === 'Edit Form'"
            @MainPage="changePage"
            @EditPage="edit"
            :task="task"
        ></EditForm>
        <Task v-else-if="pageName === 'Main Page'"
            @AddPage="changePage"
            @DeleteTask="deleteTask"
            @ToEditPage="getTodoById"
            :tasks="tasks"
            :category="category"
        ></Task>
    </div>
</template>

<script>
import axios from "axios"

import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Register from "./components/Register"
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"
import Task from "./components/Task"

export default {
    name: "app",
    data() {
        return {
            pageName: "Login Page",
            // url: "https://arfafa-kanban.herokuapp.com/",
            url: "http://localhost:3000/",
            tasks: [],
            task: "",
            category: ['Backlog', 'Todo', 'Doing', 'Done']
        }
    },
    methods: {
        edit(page, payload, id) {
            // console.log(page, payload, id)
            axios({
                url: this.url + "task/" + id,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    title: payload.title,
                    category: payload.category
                }
            })
                .then(response => {
                    this.pageName = page
                    this.getAllTask()
                })
                .catch(err => {
                    console.log(err.response.data.msg)
                })
        },
        deleteTask(id) {
            // console.log(id, "dari app")
            axios({
                url: this.url + "task/" + id,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    this.pageName = "Main Page"
                    this.getAllTask()
                    // console.log(response.data.msg)
                })
                .catch(err => {
                    console.log(err.response.data.msg)
                })
        },
        changePage(page) {  
            // console.log(page)
            this.pageName = page
        },
        login(payload) {
            // console.log(payload)
            axios({
                url: this.url + "login",
                method: "POST",
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
                .then(response => {
                    // console.log(response.data)
                    localStorage.setItem("access_token", response.data.access_token)
                    this.pageName = "Main Page"
                    this.getAllTask()
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        googleLogin(googleToken) {
            // console.log("hello google", googleEmail)
            axios({
                url: this.url + "googleLogin",
                method: "POST",
                data: {
                    googleToken
                }
            })
                .then(response => {
                    // console.log(response.data.access_token)
                    localStorage.setItem("access_token", response.data.access_token)
                    this.getAllTask()
                    this.pageName = "Main Page"
                })
                .catch(err => {
                    console.log(err.response.data.msg)
                })

        },
        register(payload) {
            // console.log(payload)
            axios({
                url: this.url + "register",
                method: "POST",
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
                .then(response => {
                    // console.log(response.data)
                    this.pageName = "Login Page"
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        logout(page) {
            localStorage.clear()
            this.pageName = page
            // console.log(page)
        },
        createTask(payload) {
            // console.log(payload)
            // console.log("halooo")
            axios({
                url: this.url + "task",
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    title: payload.title,
                    category: payload.category
                }
                
            })
                .then(response => {
                    // console.log(response.data)
                    this.pageName = "Main Page"
                    this.getAllTask()
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        getAllTask() {
            axios({
                url: this.url + "task",
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    // console.log(response.data)
                    this.tasks = response.data
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        getTodoById(page, id) {
            // console.log(id, page, 'vue app')
            axios({
                url: this.url + "task/" + id,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.pageName = page
                    this.task = response.data
                })
                .catch(err => {
                    console.log(err.response.data.msg)
                })
        }
    },
    components: {
        NavBar,
        Login,
        Register,
        AddForm,
        EditForm,
        Task
    },
    created () {
        if(localStorage.getItem("access_token")) {
            this.pageName = "Main Page"
            this.getAllTask()
        } else {
            this.pageName = "Login Page"
        }
    }
}
</script>

<style>

</style>