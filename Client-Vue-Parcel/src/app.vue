<template>
  <div>
    <!-- <h1>{{ message }} </h1> -->
    <Navbar :pageName="pageName" @logoutButton='logout' ></Navbar>
    <login v-if="pageName === 'Login Page'" @changePage='changePage' @dataLogin='login'></login>
    <register v-if="pageName === 'Register Page'" @dataRegist='regist'></register>
  </div>
</template>

<script>
  import axios from 'axios';
  import Login from './components/login.vue';
  import Navbar from './components/navbar.vue';
  import Register from './components/register.vue';

  export default {
    name: 'App',
    data() {
      return {
        baseUrl: 'http://localhost:3000/',
        message: 'Hello Vue Component by Litha',
        pageName: 'Login Page'
      };
    },
    components:{
      Navbar,
      Login,
      Register
    },
    methods:{
      changePage(page){
        this.pageName = page
      },
      regist(data){
        // console.log(data, '<<< data regist di app');
        axios({
          url: this.baseUrl + 'register',
          method: 'POST',
          data: data
        })
          .then(response =>{
            // console.log(response);
            this.pageName = 'Login Page'
          })
          .catch(err => console.log(err))
      },
      login(data){
        // console.log(data, '<<< data login di app');
        axios({
          url: this.baseUrl + 'login',
          method: 'POST',
          data: data
        })
          .then(response =>{
            console.log('----berhasil login----');
            // console.log(response);
            localStorage.setItem('access_token', response.data.access_token)
            this.pageName = 'Home Page'
            // console.log(localStorage, '<<< localstorage');
          })
          .catch(err => console.log(err))
      },
      logout(){
        localStorage.removeItem('access_token')
        this.pageName = 'Login Page'
      }
    },
    created(){
      if(localStorage.getItem('access_token')){
        this.pageName = 'Home Page'
      }else this.pageName = 'Login Page'
    }
  }
</script>

<style>

</style>