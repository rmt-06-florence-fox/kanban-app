<template>
  <div>
    <Navbar :pageName="pageName" @logoutButton='logout' ></Navbar>
    <Login v-if="pageName === 'Login Page'" @changePage='changePage' @dataLogin='login' @googleToken='googleToken'></Login>
    <Register v-if="pageName === 'Register Page'" @dataRegist='regist'></Register>
    <BoardList 
      v-if="pageName === 'Home Page'" 
      :categories="categories"
      :dataTasks='dataTasks'
      @idDelete='deleteData'
      @createTask='createTask'
      @updateData='updateData'
      @updateCategory='updateCategory'
    ></BoardList>
  </div>
</template>

<script>
  import axios from 'axios';
  import Login from './components/Login';
  import Navbar from './components/Navbar';
  import Register from './components/Register';
  import BoardList from './components/BoardList'
  import Taskboard from './components/Taskboard';
  import swal from 'sweetalert'

  const baseUrl = 'https://kanban-by-litha.herokuapp.com/'

  export default {
    name: 'App',
    data() {
      return {
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
      Taskboard,
      BoardList
    },
    methods:{
      changePage(page){
        this.pageName = page
      },
      googleToken(value){
        // console.log(value, '<<< token google di app');
        axios({
          url: baseUrl + 'googleLogin',
          method: 'POST',
          data: { googleToken : value }
        })
          .then(response =>{
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
          .catch(err => console.log(err))
      },
      regist(data){
        axios({
          url: baseUrl + 'register',
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
          url: baseUrl + 'login',
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
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        this.pageName = 'Login Page'
      },
      fetchData(){
        axios({
          url: baseUrl + 'tasks',
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
          url: baseUrl + 'tasks/' + id,
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
              url: baseUrl + 'tasks/' + id,
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
        axios({
          url: baseUrl + 'tasks',
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
        axios({
          url: baseUrl + 'tasks/' + id,
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