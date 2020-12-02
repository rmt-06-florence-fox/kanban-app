<template>
  <div>
      <div v-if="page == 'login-page'" class="container-fluid" style="height:100vh;background-image: url(https://eskipaper.com/images/penguin-1.jpg);">
      <Nav></Nav>
      <Login></Login>
      </div>
      <div v-if="page == 'main-page'" class="container-fluid" style="height:100vh">

      </div>
  </div>
</template>

<script>
import Nav from './components/nav'
import Login from './components/loginForm.vue'
export default {
    components:{
        Nav,
        Login
    },
    data(){
        return{
            page: 'login-page'
        }
    },
    methods:{

    }
    //created
}
</script>

<style>

</style>