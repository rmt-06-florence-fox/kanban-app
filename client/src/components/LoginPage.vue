<template>
  <div class="container-fluid" style="height: 100vh; background-image: url(https://eskipaper.com/images/penguin-1.jpg)">
    <Nav></Nav>
    <LoginForm @postLogin="login" @postRegister="register" :error="error"></LoginForm>
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
        }
    }

}
</script>

<style>

</style>