<template>
  <div>
    <!-- <h1>{{ message }} </h1> -->
    <Navbar :pageName="pageName" @logoutButton='logout' ></Navbar>
    <login v-if="pageName === 'Login Page'" @changePage='changePage' @dataLogin='login'></login>
    <register v-if="pageName === 'Register Page'" @dataRegist='regist'></register>
    <taskboard 
      v-if="pageName === 'Home Page'" 
      :categories="categories"
      :dataTasks='dataTasks'
      @idDelete='deleteData'
      @createTask='createTask'
      @updateData='updateData'
      @updateCategory='updateCategory'>
    </taskboard>
  </div>
</template>

<script>
  import axios from 'axios';
  import Login from './components/login.vue';
  import Navbar from './components/navbar.vue';
  import Register from './components/register.vue';
  import Taskboard from './components/taskboard.vue';
  import swal from 'sweetalert'

  export default {
    name: 'App',
    data() {
      return {
        baseUrl: 'http://localhost:3000/',
        message: 'Hello Vue Component by Litha',
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
      };
    },
    components:{
      Navbar,
      Login,
      Register,
      Taskboard
    },
    methods:{
      changePage(page){
        this.pageName = page
      },
      regist(data){
        axios({
          url: this.baseUrl + 'register',
          method: 'POST',
          data: data
        })
          .then(response =>{
            this.pageName = 'Login Page'
            swal({
              title: 'Good Job !',
              text: 'Please log in now !',
              icon: 'success'
            })
          })
          .catch(err =>{
            console.log(err.response.data.messages, '<<< error')
            let errMessages = err.response.data.messages.map(e => e.message)
            swal({
              title: 'ERROR !!!',
              text: errMessages.join(' , '),
              icon: 'error'
            })
          })
      },
      login(data){
        axios({
          url: this.baseUrl + 'login',
          method: 'POST',
          data: data
        })
          .then(response =>{
            console.log('----berhasil login----');
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('id', response.data.id)
            this.pageName = 'Home Page'
            this.fetchData()
            swal({
              title: 'Welcome !',
              text: `Have a nice day, ${response.data.name} !`,
              icon: 'success'
            })
          })
          .catch(err =>{
            console.log(err)
            swal({
              title: 'ERROR !!!',
              text: err.response.data.message,
              icon: 'error'
            })
          })
      },
      logout(){
        localStorage.removeItem('access_token')
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        this.pageName = 'Login Page'
      },
      fetchData(){
        axios({
          url: this.baseUrl + 'tasks',
          method: 'GET',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(response =>{
            this.dataTasks = response.data
            console.log(this.dataTasks, '<<< data tasks');
          })
          .catch(err => console.log(err))
      },
      updateData(newData, id){
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'PUT',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: newData
        })
          .then(response =>{
            this.fetchData()
          })
          .catch(err => console.log(err))
      },
      deleteData(id){
        // console.log(id, '<< id untuk delete di app');
        swal({
          title: 'Delete ?',
          text: 'Once deleted, you will not be able to recover this task !',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
        .then((willDelete)=>{
          if(willDelete){
            axios({
              url: this.baseUrl + 'tasks/' + id,
              method: 'DELETE',
              headers:{
                access_token: localStorage.getItem('access_token')
              }
            })
              .then(response =>{
                this.fetchData()
                swal({
                  title: 'Deleted',
                  text: 'Successfully deleted your task',
                  icon: 'success'
                })
              })
              .catch(err => console.log(err))
          }else swal('Well... okay...')
        })
      },
      createTask(data){
        // console.log(data, '<<< data untuk di tambahkan ada di app');
        axios({
          url: this.baseUrl + 'tasks',
          method: 'POST',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: data
        })
          .then(response => this.fetchData())
          .catch(err => console.log(err))
      },
      updateCategory(data, id){
        console.log(data, id, '<<< hasil patch category ada di app');
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
    created(){
      if(localStorage.getItem('access_token')){
        this.fetchData()
        this.pageName = 'Home Page'
      }else this.pageName = 'Login Page'
    }
  }
</script>

<style>

</style>