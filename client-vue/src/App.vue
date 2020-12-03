<template>
  <div>
    <navbar-component :currentPage="currentPage" @halamanLogin="logout" ></navbar-component>
    <login-form-component v-if="currentPage == 'login page'" 
      @halamanRegister="changePage"
      @loginUserData="login"
    ></login-form-component>
    <register-form-component v-else-if="currentPage == 'register page'" @registUser="register"></register-form-component>  
    <kanban-board-component v-else-if="currentPage == 'kanban page'"></kanban-board-component>
  </div>
</template>

<script>

// import component
import NavbarComponent from './components/navbar-component'
import RegisterFormComponent from './components/register-form-component.vue'
import LoginFormComponent from './components/login-form-component.vue'
import axios from 'axios'
import swal from 'sweetalert';
import KanbanBoardComponent from './components/kanban-board-component.vue'

const baseurl = "http://localhost:3000/"

export default {
  name : "App",
  data(){
    return {
      name : "tio",
      currentPage : "login page"
    }
  },
  components :{
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    KanbanBoardComponent
  },
  methods:{
    changePage(page){
      console.log(page,'sampe app');
      this.currentPage = page
    },
    register(registUser){
      console.log(registUser);
      
      axios({
        url : `${baseurl}register`,
        method : "post",
        data :  registUser 
      })
      .then(response =>{
        swal({
          icon: "success",
          title: "Welcome",
          text : "registration success"
        })
        this.currentPage = 'login page'
      })
      .catch(err =>{
        console.log(err.response.data);
        const errors = err.response.data.map(e=> e.message)
        swal({
          icon : "warning",
          title : "Error",
          text : errors.join(', ')
        })
      })
    },
    async login(loginUser){
      console.log(loginUser);
      try {
        const token = await axios({
          url : `${baseurl}login`,
          method : "post",
          data : loginUser
        })
        swal({
          icon: "success",
          title: "Welcome",
          text : `${loginUser.email}`
        })
        this.currentPage = 'kaban page'
        localStorage.setItem('access_token', token.data.access_token)

        // console.log(token.data);
      } catch (error) {
        swal({
          icon: "error",
          title: "error",
          text : error.response.data.message
        })
      }
    },
    logout(page){
      localStorage.removeItem('access_token')
      this.currentPage = page;
    }
        
  },
  created(){
    if(localStorage.getItem('access_token')){
      this.currentPage = 'kanban page'
    }else{
      this.currentPage = 'login page'
    }
  }  
}
</script>

<style>

</style>