<template>
    <div>
        <LoginPage 
            v-if="currentPage === 'Login Page'"
            @loginSubmit="login" 
            @changeRegisterPage="renderRegis"
        >
        </LoginPage>
        <RegisterPage 
            v-else-if="currentPage === 'Register Page'" 
            @registerSubmit="register"
            @toLoginPage="renderLogin"
        
        >
        </RegisterPage>
        <MainPage 
            v-else 
            :categories="categoryTask"
            :orderTask="requestTaskId"
            @getTaskById="getTaskId"
            @emitEditValue="editValue"
            @buttonLogout="logout"
        >
        </MainPage>
    </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue"
import RegisterPage from "./components/RegisterPage"
import axios from "axios"
import MainPage from "./components/MainPage"
export default {
    name:  "App",
    data(){
        return {
            name: "Dayu",
            currentPage: "Login Page",
            url: "https://kanban-app-florence.herokuapp.com",
            categoryTask: [],
            requestTaskId: []
        }
    },
    components: {
        LoginPage,
        MainPage, 
        RegisterPage
    },
    methods: {
        logout(pageName){
            localStorage.clear()
            this.currentPage = pageName
        },
        login(email, password){
            axios({
                url: this.url + "/login", 
                method: "post",
                data: {
                    email,
                    password
                }
            })
                .then(response => {
                    // console.log(response.data.access_token)
                    localStorage.setItem("access_token", response.data.access_token)
                    // localStorage.setItem("UserId", )
                    console.log(response.data)
                    this.currentPage = "Main Page"
                    this.fetchCategories()
                    // this.editValue()

                })
                .catch(error => {
                    console.log(error)
                })
        },
        register(email, password){
            console.log(email, password)
            axios({
                url: this.url + "/register", 
                method: "post",
                data: {
                    email,
                    password
                }
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log("masuk error bos")
                    console.log(error)
                })

        },
        renderRegis(){
            this.currentPage = "Register Page"
        },
        renderLogin(){
            this.currentPage = "Login Page"
        },
        fetchCategories(){
            axios({
                url: this.url + "/categories",
                method: "get",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    const sortCategories = response.data.sort((a, b) => a.id-b.id)

                    console.log(response)
                    this.categoryTask = sortCategories
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getTaskId(key){
            axios({
                url: this.url + `/tasks/${key}`,
                method: "get",
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(response => {
                    this.requestTaskId = response.data
                    console.log(response.data)
                })
                .catch(error =>  {
                    console.log(error)
                })
        },
        editValue(value){
            console.log(value, "dari APPPPPP")
            const title = value.title
            const CategoryId = value.CategoryId
            const UserId = value.UserId
    
            axios({
                url: this.url + "/tasks/" + value.id,
                method: "put",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title,
                    CategoryId,
                    UserId
                }
            })
                .then(response => {
                    console.log(response.data, "<--- ini sudah berhasil diupdate ")
                    this.fetchCategories()
                })
                .catch(error => {
                    console.log(error)
                })
        }


    },
    created(){
        if(localStorage.getItem("access_token")){
            this.currentPage = "Main Page"
            this.fetchCategories()
        }
        else{
            this.currentPage = "Login Page"
        }
    }

    
}
</script>

<style>

</style>