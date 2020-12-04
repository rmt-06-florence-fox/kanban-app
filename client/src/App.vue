<template>
    <div>
        <LoginPage v-if="openedPage === 'login'" @gotoRegister="toRegister" @gotoDashboard="toDashboard"></LoginPage>
        <RegisterPage v-else-if="openedPage === 'register'" @gotoLogin="toLogin"></RegisterPage>
        <Dashboard v-else-if="openedPage === 'dashboard'" @logout="logout"></Dashboard>
    </div>  
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Dashboard from './components/Dashboard'

export default {
    name: "App",
    components: { 
        LoginPage,
        RegisterPage,
        Dashboard
        },
    data () {
        return {
            openedPage : ''
        }
    },
    methods : {
        toRegister () {
            this.openedPage ='register'
        },
        toLogin () {
            this.openedPage ='login'
        },
        toDashboard () {
            this.openedPage = 'dashboard'
        },
        logout () {
            this.openedPage ='login'
        }
    },
    created: function() {
        let access_token = localStorage.getItem('token')
        if (access_token) {
            this.openedPage = 'dashboard'
        } else {
            this.openedPage = 'login'
        }
    }
}
</script>

<style>

</style>