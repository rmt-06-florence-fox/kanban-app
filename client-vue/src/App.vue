<template>
  <div>
    <navbar-component :currentPage="currentPage" @halamanLogin="logout" ></navbar-component>
    <login-form-component v-if="currentPage == 'login page'" 
      @halamanRegister="changePage"
      @loginUserData="login"
    ></login-form-component>
    <register-form-component v-else-if="currentPage == 'register page'" @registUser="register"></register-form-component>  
    <kanban-board-component v-else-if="currentPage == 'kanban page'" 
      :categories="categories"
      :tasks="tasks"
    ></kanban-board-component>
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
      currentPage : "login page",
      categories : [
        {
          id : 1,
          name : 'backlog',
          color : 'bg-primary'
        },
        {
          id : 2,
          name : 'todo',
          color : 'bg-secondary'
        },
        {
          id : 3,
          name : 'doing',
          color : 'bg-warning'
        },{
          id : 4,
          name : 'done',
          color : 'bg-success'
        }
      ],
      tasks : []
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
      this.currentPage = page
    },
    register(registUser){
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
        this.currentPage = 'kanban page'
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
    },
    async fetch(){
      try {
        const data = await axios({
          url : `${baseurl}tasks`,
          method: 'get',
          headers :{
            access_token : localStorage.getItem('access_token')
          }
        })
        this.tasks = data.data
      } catch (error) {
        console.log(error);
      }
    }
        
  },
  created(){
    if(localStorage.getItem('access_token')){
      this.currentPage = 'kanban page'
      this.fetch()
    }else{
      this.currentPage = 'login page'
    }
  }  
}
</script>

<style>

</style>