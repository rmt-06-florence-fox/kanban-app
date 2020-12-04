<template>
    <div>
        <Navbar :currentPage="currentPage" @changePage="changePage" @buttonLogin-logout="changePage"></Navbar>
        <LoginPage v-if="currentPage === 'Login Page'" @changePage="changePage" @login="login" ></LoginPage>
        <RegisterPage v-if="currentPage === 'Register Page'" @changePage="changePage" @register="register" ></RegisterPage>
        <MainPage 
        v-if="currentPage === 'Home Page'" 
        :tasks="tasks" 
        :categories="categories"
        @toAddTask="toAddTask"
        @deleteTask="deleteTask" 
        @toEditTask='toEditTask'
        ></MainPage>
        <AddPage 
        v-if="currentPage === 'Add Page'" 
        @addTask="addTask" 
        :selectedCategory="selectedCategory"
        ></AddPage>
        <EditPage 
        v-if="currentPage === 'Edit Page'" 
        :edited='edited'
        @updateTask='updateTask'
        ></EditPage>
    </div>
</template>

<script>
import axiosInstance from "../axios/index"
import Navbar from "./components/Navbar"
import RegisterPage from "./components/Register"
import LoginPage from "./components/Login"
import MainPage from "./components/MainPage"
import AddPage from "./components/AddPage"
import EditPage from "./components/EditPage"

export default {
    name: "App",
    data () {
        return {
            name: "fajar",
            currentPage: "Register Page",
            tasks: [],
            categories: [
                {
                    name: "Backlog"
                },
                {
                    name: "Todo"
                },
                {
                    name: "Doing"
                },
                {
                    name: "Done"
                }
            ],
            selectedCategory: "",
            edited: {}
        }
    },
    components: {
        RegisterPage,
        LoginPage,
        MainPage,
        Navbar,
        AddPage,
        EditPage
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        register(data) {
            axiosInstance({
                url: "/register",
                method: "POST",
                data: data
            })
            .then(response => {
                this.currentPage = "Login Page"
            })
            .catch(err => {
                console.log(err);
            })
        },
        login(data) {
            console.log(data);
            axiosInstance({
                url: "/login",
                method: "POST",
                data: data
            })
            .then(response => {
                localStorage.setItem("access_token", response.data.access_token)
                localStorage.setItem("id", response.data.id)
                this.currentPage = "Home Page"
                this.show()
            })
            .catch(err => {
                console.log(err);
            })
        },
        //show/fetch all task
        show() {
            axiosInstance({
                url: "/tasks",
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(response => {
                // console.log(response.data);
                this.tasks = response.data
            })
        },
        // add task
        addTask(data) {
            axiosInstance({
                url: "/tasks",
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: data
            })
            .then(response => {
                this.changePage = "Home Page"
                this.show()
            })
            .catch(err =>{
                console.log(err);
            })
        },
        //directly to add page
        toAddTask(data) {
            this.selectedCategory = data
            this.changePage('Add Page')
        },
        //fecth current data to edit page
        toEditTask(data) {
            axiosInstance({
                url: "/tasks/"+data,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: data
            })
            .then(response => {
                this.edited = response.data
                this.changePage("Edit Page")
            })
        },
        //
        updateTask(data) {
            console.log(data, "<<<<<<<<<");
            axiosInstance({
                url: "/tasks/"+data.id,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: data
            })
            .then(response => {
                this.changePage("Home Page")
                this.show()
            })
        },
        //delete a task
        deleteTask(id) {
            // console.log(data);
            axiosInstance({
                url: "/tasks/"+ id,
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            .then(response =>{
                this.changePage("Home Page")
                this.show()
            })
            .catch(err =>{
                console.log(err);
            })
        }
    },
    created() {
        if (localStorage.getItem("access_token")) {
            this.currentPage = "Home Page"
            this.show()
        } else {
            this.currentPage = "Login Page"
        }
    }
}
</script>

<style>

</style>