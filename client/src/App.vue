<template>
  <div>
    <navbar @logout="logout" @changePage="changePage"></navbar>
    <registerPage v-if="currentPage === 'registerPage'" @changePage="changePage" @dataRegister="register"></registerPage>
    <loginPage v-else-if="currentPage === 'loginPage'" @changePage="changePage" @dataLogin="login"  @googleToken='googleToken'></loginPage>
    <boardList v-else-if="currentPage === 'boardList'" @changePage='changePage' :dataTasks='dataTasks' @createTask="createTask" @deleteId="deleteData" @editTask="editTask"></boardList>
  </div>
</template>

<script>
  import axios from "axios"
  import navbar from "./component/navbar"
  import registerPage from "./component/registerPage"
  import loginPage from "./component/loginPage"
  import boardList from './component/boardList'

  const baseUrl = 'http://localhost:3000/'
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello world',
      currentPage: 'registerPage',
      dataTasks: []
    };
  },
  components: {
    navbar,
    registerPage,
    loginPage,
    boardList
  },
  methods: {
    changePage(page) {
      this.currentPage = page
    },
    register(data) {
      axios({
        url: baseUrl + 'register',
        method: "POST",
        data: data
      })
      .then(response => {
        this.currentPage = "loginPage"
      })
      .catch(err => {
        console.log(err);
      })
    },
    login(data) {
      axios({
        url: baseUrl + 'login',
        method: "POST",
        data: data
      })
      .then(response => {
        // console.log(response);
        this.currentPage = 'boardList'
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('id', response.data.id)
      })
      .catch(err => {
        console.log(err);
      })
    },
    // googleToken(value) {
    //   axios({
    //     url: baseUrl + 'googleLogin',
    //     method: 'POST',
    //     data: value
    //   })
    //   .then(response =>{
    //     localStorage.setItem('access_token', response.data.access_token)
    //     localStorage.setItem('email', response.data.email)
    //     localStorage.setItem('id', response.data.id)
    //     this.pageName = 'boardList'
    //     this.fetchData()
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // },
    logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        this.currentPage = 'loginPage'
    },
    fetchData() {
     axios({
        url: baseUrl + 'tasks',
        method: "GET",
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response => {
        // console.log(response.data);
        this.dataTasks = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    createTask(data) {
       axios({
        url: baseUrl + 'tasks',
        method: "POST",
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: data
      })
      .then(response => {
        console.log(response.data);
        this.fetchData()
      })
      .catch(err => {
        console.log(err);
      })
    },
    deleteData(id) {
      // console.log('di app');
      axios({
        url: baseUrl + 'tasks/' + id,
        method: "DELETE",
        headers: {
        access_token: localStorage.getItem('access_token')
        },
      })
      .then(response => {
        // console.log(response.data);
        this.fetchData()
      })
      .catch(err => {
        console.log(err);
      })
    },
    editTask(editedData, id) {
      console.log('di app');
      axios({
        url: baseUrl + 'tasks/' + id,
        method: "PUT",
        headers: {
        access_token: localStorage.getItem('access_token')
        },
        data: editedData
      })
      .then(response => {
        console.log(response.data);
        this.fetchData()
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.currentPage = 'boardList'
      this.fetchData()
    }else {
      this.currentPage = 'registerPage'
    }
  }
};
</script>

<style>
* {
    margin: 0;
}

.navbar {
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #3498db;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

.nav-right{
    display: flex;
    align-items: center;
}

.nav-list {
    display: flex;
    list-style: none;
    /* align-items: center; */
    height: 100%;
}

.nav-list a {
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.main-title {
    display: flex;
    align-items: center;
    height: 100%;
    font-family: cursive;
}
</style>

