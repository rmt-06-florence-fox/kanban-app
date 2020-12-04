<template>
    <div>
        <LoginPage
        v-if="currentPage === 'login'"
        @changeCurrentPage="changePage"
        ></LoginPage>
        <RegisterPage 
        v-else-if="currentPage === 'register'"
        @changeCurrentPage="changePage"
        ></RegisterPage>
        <MainPage v-else-if="currentPage === 'home'"
        @updateTask="updateTask"
        @deleteTask="deleteTask"
        @changeCurrentPage="changePage"
        @addNewTask="createTask"
        :dataTask="tasks"
        ></MainPage>
    </div>
</template>

<script>
import axios from "axios"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import MainPage from "./components/MainPage"

export default {
    name: "App",
    data () {
        return {
            currentPage: "login",
            tasks: []
        }
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        fetchTasks() {
            axios({
                method: "GET",
                url: "https://kanban-db-arif.herokuapp.com/tasks",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    this.tasks = response.data
                })
                .catch(err => {
                    console.log(err);
                })
        },
        createTask(datatitle, datacategory) {
            axios({
                method: 'POST',
                url: 'https://kanban-db-arif.herokuapp.com/tasks',
                data: {
                    title: datatitle,
                    category: datacategory
                },
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(data => {
                    this.fetchTasks()
                })
                .catch(err => {
                    console.log(err);
                })
        },
        updateTask(newTitle, newCategory, id) {
            axios({
                method: 'PUT',
                url: `https://kanban-db-arif.herokuapp.com/tasks/${id}`,
                data: {
                    title: newTitle,
                    category: newCategory
                },
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(data => {
                    this.fetchTasks()
                })
                .catch(err => {
                    console.log(err);
                })
        },
        deleteTask(id) {
            axios({
                method: 'DELETE',
                url: `https://kanban-db-arif.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(data => {
                    this.fetchTasks()
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    components: {
        LoginPage,
        RegisterPage,
        MainPage
    },
    created() {
        if (localStorage.getItem('access_token')) {
            this.currentPage = 'home'
            this.fetchTasks()
        } else {
            this.currentPage = 'login'
        }
    }
}
</script>

<style>

</style>