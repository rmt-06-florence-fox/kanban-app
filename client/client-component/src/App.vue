<template>
    <div>
        <LoginPage></LoginPage>
    </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue"
// import MainPage from "./components/MainPage"
export default {
    name:  "App",
    data(){
        return {
            name: "Dayu",
            currentPage: "Login Page",
            url: "https://kanban-app-florence.herokuapp.com/"
        }
    },
    components: {
        LoginPage,
        // MainPage
    },
    methods: {


        created(){
            if(localStorage.getItem("access_token")){
                this.currentPage = "MainPage"
            }
            else{
                this.currentPage = "Login Page"
            }
        }

    },
    
}
</script>

<style>

</style>