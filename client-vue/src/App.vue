<template>
  <div>
    <navbar-component :currentPage="currentPage" @halamanLogin="logout" ></navbar-component>
    <login-form-component v-if="currentPage == 'login page'" 
      @halamanRegister="changePage"
      @loginUserData="login"
      @googleToken="googleSignIn"
    ></login-form-component>
    <register-form-component v-else-if="currentPage == 'register page'" @registUser="register"></register-form-component>  
    <kanban-board-component v-else-if="currentPage == 'kanban page'" 
      :categories="categories"
      :tasks="tasks"
      @deleteId="deleteTask"
      @editTask="editTask"
      @addTask="createTask" 
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
        this.fetch()
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
      swal({
        icon: "success",
        title: "logout",
        text : `byeeee`
      })
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
    },
    async deleteTask(id){
      try {
        const deleted = await axios({
          url : `${baseurl}tasks/${id}`,
          method: 'delete',
          headers :{
            access_token : localStorage.getItem('access_token')
          }
        })
        this.fetch()
      } catch (error) {
        swal({
          icon: "error",
          title: "error",
          text : error.response.data.message
        })
      }
    },
    async editTask(data, id){
      // console.log(data, id);
      try {
        const editedTask = await axios ({
          url : `${baseurl}tasks/${id}`,
            method: 'put',
            headers :{
            access_token : localStorage.getItem('access_token')
            },
            data : data
        })
        this.fetch()
      } catch (error) {
        this.fetch()
        console.log(error);
      }
    },
    async createTask(data){
      // console.log(data);
      try {
        const newTask = await axios({
          url : `${baseurl}tasks`,
            method: 'post',
            headers :{
            access_token : localStorage.getItem('access_token')
            },
            data : data
        })
        this.fetch()
      } catch (error) {
        console.log(error);
      }
    },
    async googleSignIn(token){
      // console.log(token);

      try {
        const googleLoginToken = await axios({
          url : `${baseurl}googleLogin`,
          data :{
            token
          },
          method : 'post'
        })
        // console.log(googleLoginToken.data.access_token);
        localStorage.setItem('access_token', googleLoginToken.data.access_token)
        this.currentPage = 'kanban page'
        this.fetch()
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