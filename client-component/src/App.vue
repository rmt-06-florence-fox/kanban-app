<template>
    <div>
        <LoginPage 
            v-if="currentPage === 'Login Page'"
            @loginSubmit="login" 
            @emitGoogleLogin="googleLogin"
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
            @emitValueAdd="addValue"
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
            url: "http://localhost:3000",
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
            var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        },
        googleLogin(token){
            axios({
                url: this.url + "/googleLogin",
                method: "post",
                data: {
                    token
                }

            })
                .then(response => {
                    console.log(response, "<------- ini dari appp")
                    localStorage.setItem("access_token", response.data.access_token)
                    localStorage.setItem("name", response.data.data.email.split('@')[0])
                    console.log(response)
                    this.currentPage = "Main Page"
                    this.fetchCategories()
                    this.login()

                })
                .catch(error => {
                    console.log(error)
                })
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
                    localStorage.setItem("access_token", response.data.access_token)
                    localStorage.setItem("email", response.data.email)

                    console.log(response.data)
                    this.currentPage = "Main Page"
                    this.addValue()
                    this.fetchCategories()


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
        },
        addValue(value, id){
            const title = value
            const CategoryId = id
            axios({
                url: this.url + "/tasks",
                method: "post",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    title,
                    CategoryId
                }
            })
                .then(response => {
                    console.log("berhasil")
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