<template>
    <div>
        <LoginPage v-if="currentPage === 'LoginPage'" @login="login" @googleToken="loginGoogle" @toRegister="toRegister"></LoginPage>
        <MainPage  v-else-if="currentPage === 'ContentPage'" @logout="logout" :categories="categories" :listCategories="listCategories" @deleteTask="deleteTask" @addnewTask="addnewTask" @addnewCategory="addnewCategory" @deleteCategory="deleteCategory" @editTask="editTask"></MainPage>
        <RegisterPage v-else-if="currentPage === 'RegisterPage'" @register="register" @backToLogin="backToLogin"></RegisterPage>
    </div>
</template>

<script>
import axios from 'axios'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import RegisterPage from './components/RegisterPage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: "App",
    data (){
        return {
            categories: [],
            listCategories: [],
            currentPage: ''
        }
    },
    methods: {
        fetchCategories (){
            axios({
                method: 'GET',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/categories',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.categories = response.data.category
                this.listCategories = []
                response.data.category.forEach(element => {
                    let temp = {id: element.id, name: element.name}
                    this.listCategories.push(temp)  
                })
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask(id){
            axios({
                method: 'DELETE',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/tasks/'+id,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.fetchCategories()

            })
            .catch(err => {
                console.log(err)
            })
        },
        addnewTask(categoryId, taskname){
            axios({
                method: 'POST',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/tasks',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data:{
                    CategoryId: categoryId,
                    name: taskname
                }
            })
            .then(response => {
                this.fetchCategories()
            })
            .catch(err => {
                console.log(err)
            })
        },
        editTask(editId,editName,editCategoryId){
            axios({
                method: 'PUT',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/tasks/'+editId,
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data:{
                    name: editName,
                    CategoryId: editCategoryId
                }
            })
            .then(response => {
                this.fetchCategories()
            })
            .catch(err => {
                console.log(err)
            })
        },
        addnewCategory(name){
            axios({
                method: 'POST',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/categories',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                   name: name 
                }
            })
            .then(response => {
                    this.fetchCategories()
                })
            .catch(err => {
                console.log(err)
            })
        },
        deleteCategory(id){
            axios({
                method: 'DELETE',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/categories/'+id,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.fetchCategories()
            })
            .catch(err => {
                console.log(err)
            })
        },
        login(email, password){
            axios({
                method: 'POST',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/login',
                data: {
                    email: email,
                    password: password
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                this.fetchCategories()
                this.currentPage = 'ContentPage'
            })
            .catch(err => {
                console.log(err)
            })
        },
        toRegister(){
            this.currentPage = 'RegisterPage'
        },
        register(name, email, password){
            axios({
                method: 'POST',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/register',
                data: {
                    name: name,
                    email: email,
                    password: password
                }
            })
            .then(response => {
                this.currentPage = 'LoginPage'
            })
            .catch(err => {
                console.log(err)
            })
        },
        backToLogin(){
            this.currentPage = 'LoginPage'
        },
        logout(){
            this.currentPage = 'LoginPage'
            localStorage.removeItem('access_token')
        },
        loginGoogle(idToken){
            axios({
                method: 'POST',
                url: 'https://kanban-server-h8rmt6.herokuapp.com/googlelogin',
                data: {
                    googletoken: idToken
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                this.fetchCategories()
                this.currentPage = 'ContentPage'
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    components: {
        LoginPage,
        MainPage,
        RegisterPage
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.fetchCategories()
            this.currentPage = 'ContentPage'
        }else{
            this.currentPage = 'LoginPage'
        }
    }
}
</script>

<style>

</style>