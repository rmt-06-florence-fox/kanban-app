<template>
  <div class="d-flex justify-content-center">
    <img id="img-left" src="img/undraw_stepping_up_g6oo.svg" alt="">
    <loginForm v-if="pageName == 'login page'" @submitLogin = "loginSubmit" @changePageName="changePage"></loginForm>
    <registerForm v-if="pageName == 'register page'" @registSubmit = "registSubmit" @changePageName= "changePage" ></registerForm>
  
    </div>
</template>

<script>
import loginForm from "./loginForm"
import registerForm from "./registerForm"
export default {
    name: 'entryPage',
    data() {
        return {
        }
    },
    props:['pageName'],
    components: {
        loginForm,
        registerForm
    },
    methods: {
        changePage(page) {
            this.$emit('changePage', page)
        },
        loginSubmit(payload){
            // console.log('submit dari entry page', payload)
            this.$emit('axiosLogin', payload)
        },
        registSubmit(payload){
            this.$emit('axiosRegist', payload)
        }
    },
    created(){
        console.log(this.pageName)
    }

}
</script>

<style>
    
</style>