<template>
    <div>
        <NavBar
            @logout="logout"
        ></NavBar>
        <Login v-if="pageName === 'Login Page'"
            @RegisterPage="changePage"
            @loginpage="login"
        ></Login>
        <Register v-else-if="pageName === 'Register Page'"
            @LoginPage="changePage"
            @register="register"
        ></Register>
        <AddForm v-else-if="pageName === 'Add Form'"
            @MainPage="changePage"
            @createTask="createTask"
        ></AddForm>
        <EditForm v-else-if="pageName === 'Edit Form'"
            @MainPage="changePage"
            :titleTask="task.title"
            :categoryTask="task.category"
            :idTask="task.id"
        ></EditForm>
        <Task v-else-if="pageName === 'Main Page'"
            @EditPage="editPage"
            @AddPage="changePage"
            @DeleteTask="deleteTask"
            :tasks="tasks"
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
            url: "http://localhost:3000/",
            tasks: [],
            task: {
                title: "",
                category: "",
                id: ""
            }
        }
    },
    methods: {
        deleteTask(id) {
            // console.log(id)
            axios({
                url: this.url + "task/" + id,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    this.pageName = "Main Page"
                    this.fetchBacklog()
                    console.log(response.data.msg)
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        editPage(page, task) {
            // console.log(page, task)
            this.pageName = page
            this.task.title = task.title
            this.task.category = task.category
            this.task.id = task.id
        },
        changePage(page) {  
            console.log(page)
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
                    console.log(response.data)
                    localStorage.setItem("access_token", response.data.access_token)
                    this.pageName = "Main Page"
                })
                .catch(err => {
                    console.log(err.response)
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
        fetchBacklog() {
            axios({
                url: "http://localhost:3000/backlog",
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    this.tasks = response.data
                    console.log(this.tasks)
                })
                .catch(err => {
                    console.log(err.response)
                })
        },
        createTask(payload) {
            console.log(payload)
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
                    console.log(response.data)
                    this.pageName = "Main Page"
                    this.fetchBacklog()
                })
                .catch(err => {
                    console.log(err.response)
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
            this.fetchBacklog()
        } else {
            this.pageName = "Login Page"
        }
    }
}
</script>

<style>

</style>