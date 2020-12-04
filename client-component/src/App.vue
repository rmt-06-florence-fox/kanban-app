<template>
  <div>
    <Navbar :pageName="pageName" @logoutButton='logout' ></Navbar>
    <Login v-if="pageName === 'Login Page'" @changePage='changePage' @dataLogin='login'></Login>
    <Register v-if="pageName === 'Register Page'" @dataRegist='regist'></Register>
    <TaskList 
      v-if="pageName === 'Home Page'" 
      :categories="categories"
      :dataTasks='dataTasks'
      :dataEdit='dataEdit'
      @idEdit='editTask'
      @idDelete='deleteTask'
      @idPatch='patchTask'
      @createTask='createTask'
      @updateTask='updateTask'
      @updateCategory='updateCategory'>
    </TaskList>
  </div>
</template>

<script>
  import Login from './components/LoginPage';
  import Navbar from './components/Navbar';
  import Register from './components/RegisterPage';
  import TaskList from './components/TaskList';
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
        baseUrl: 'http://localhost:3000/',
        message: 'Hello',
        pageName: 'Login Page',
        categories:[
          {
            id: 1,
            name: 'Backlog'
          },
          {
            id: 2,
            name: 'Todo'
          },
          {
            id: 3,
            name: 'Doing'
          },
          {
            id: 4,
            name: 'Done'
          }
        ],
        dataTasks: [],
        dataEdit: {}
      };
    },
    components: {
      Navbar,
      Login,
      Register,
      TaskList
    },
    methods:{
      changePage(page) {
        this.pageName = page
      },
      regist(data) {
        axios({
          url: this.baseUrl + 'register',
          method: 'POST',
          data: data
        })
        .then(response =>{
          this.pageName = 'Login Page'
        })
        .catch(err => console.log(err))
      },
      login(data) {
        axios({
          url: this.baseUrl + 'login',
          method: 'POST',
          data: data
        })
        .then(response => {
          console.log(response)
          localStorage.setItem('access_token', response.access_token)
          this.pageName = 'Home Page'
        })
        .catch(err => console.log(err))
      },
      logout() {
        localStorage.removeItem('access_token')
        this.pageName = 'Login Page'
      },
      fetchTask() {
        axios({
          url: this.baseUrl + 'tasks',
          method: 'GET',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(response =>{
          this.dataTasks = response
          console.log(this.dataTasks);
        })
        .catch(err => console.log(err))
      },
      editTask(id) {
        console.log(id);
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'GET',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(response =>{
          this.dataEdit = response.data
          console.log(this.dataEdit);
        })
        .catch(err =>{
          console.log(err)
        })
      },
      updateTask(newData, id){
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'PUT',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: newData
        })
        .then(response =>{
          this.fetchTask()
        })
        .catch(err => console.log(err))
      },
      deleteTask(id) {
        console.log(id);
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'DELETE',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(response => this.fetchData())
        .catch(err => console.log(err))
      },
      patchTask(id) {
        console.log(id);
      },
      createTask(data){
        axios({
          url: this.baseUrl + 'tasks',
          method: 'POST',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: data
        })
        .then(response => this.fetchTask())
        .catch(err => console.log(err))
      },
      updateCategory(data, id){
        console.log(data, id);
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'PATCH',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: data
        })
        .then(response => this.fetchData())
        .catch(err => console.log(err))
      }
    },
    created() {
      if(localStorage.getItem('access_token')){
        this.pageName = 'Home Page'
        this.fetchTask()
      } else this.pageName = 'Login Page'
    }
  }
</script>

<style>
</style> 