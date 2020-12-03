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
      :dataEdit='dataEdit'
      @idEdit='editData'
      @idDelete='deleteData'
      @idPatch='patchData'
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
        dataEdit: {}
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
            // console.log(response.data, '<<< data');
            this.dataTasks = response.data
            console.log(this.dataTasks, '<<< data tasks');
          })
          .catch(err => console.log(err))
      },
      editData(id){
        console.log(id, '<< id untuk edit di app');
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'GET',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(response =>{
            // console.log(response);
            this.dataEdit = response.data
            console.log(this.dataEdit, '<<< data untuk edit');
          })
          .catch(err =>{
            console.log(err)
          })
      },
      updateData(newData, id){
        // console.log(newData, id, '<<< data update di app');
        axios({
          url: this.baseUrl + 'tasks/' + id,
          method: 'PUT',
          headers:{
            access_token: localStorage.getItem('access_token')
          },
          data: newData
        })
          .then(response =>{
            // console.log(response.data, '<<<hasil update di app');
            this.fetchData()
          })
          .catch(err => console.log(err))
      },
      deleteData(id){
        console.log(id, '<< id untuk delete di app');
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
      patchData(id){
        console.log(id, '<< id untuk patch di app');
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
        this.pageName = 'Home Page'
        this.fetchData()
      }else this.pageName = 'Login Page'
    }
  }
</script>

<style>

</style>