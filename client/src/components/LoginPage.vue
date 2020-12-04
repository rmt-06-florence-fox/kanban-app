<template>
  <div class="container-fluid" style="height: 100vh; background-image: url(https://eskipaper.com/images/penguin-1.jpg)">
    <Nav></Nav>
    <LoginForm @postLogin="login" @postRegister="register" :error="error" @googleLogin="googleLogin"></LoginForm>
  </div>
</template>

<script>
import Nav from './Nav'
import LoginForm from './LoginForm'
export default {
    props: ['error'],
    components:{
        Nav,
        LoginForm
    },
    methods:{
        login(obj){
            this.$emit('postLogin',obj)
        },
        register(obj){
            this.$emit('postRegister',obj)
        },
        googleLogin(id_token){
            this.$emit('googleLogin', id_token)
        }
    }

}
</script>

<style>

</style>