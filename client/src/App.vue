<template>
  <div class="app">
    <Login v-if="pageName === 'Login'" v-on:login="login" v-on:register="register"></Login>
    <NavBar v-if="pageName === 'Kanban'"></NavBar>
  </div>
</template>

<style scoped>
  .app {
    min-height: 100vh;
  }
</style>

<script>
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      baseUrl : 'http://localhost:3000/',
      pageName: 'Login',
      categories: [
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
        },
      ],
      taskData: [],
    }
  },
  components: {
    Login, NavBar
  },
  methods: {
    // switchPage(page) {
    //   this.pageName = page
    // },

    register(data) {
      console.log("Register here");
      axios({
        url: `${this.baseUrl}register`,
        method: 'POST',
        data: data
      })
      .then(res => {
        this.pageName = 'Login'
        swal({
          title: 'Registry Success !',
          text: 'You can login now !',
          icon: 'success'
        })
      })
      .catch(err => {
        console.log(err.res.data.messages, '<-- error')
        let msg = err.res.data.messages.map(el => {
          el.messages
        })
        swal({
          title: 'You Have Encountered an Error !',
          text: msg.join(', '),
          icon: 'error'
        })
      })
    },

    login(data) {
      console.log(data)
      axios({
        url: `${this.baseUrl}login`,
        method: 'POST',
        data: data
      })
      .then(res => {

        console.log(res)
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('email', res.data.email)
        this.pageName = 'Kanban'
        // this.fetchData()
        swal({
          title: `Hello !`,
          text: `Be Ready, ${res.data.username}`,
          icon: 'success'
        })
      })
      .catch(err => {
        console.log(err)
        swal({
          title: 'You Have Encountered an Error !',
          text: err.res.messages,
          icon: 'error'
        })
      })
    },
    // logout() {
    //   localStorage.removeItem('access_token')
    //   localStorage.removeItem('id')
    //   localStorage.removeItem('email')
    //   this.pageName = 'Login Page'
    // },
    // fetchData() {
    //   axios({
    //     url: `${baseUrl}/tasks`,
    //     method: 'GET',
    //     headers: {
    //       access_token: localStorage.getItem('access_token')
    //     }
    //   })
    //   .then(res => {
    //     this.taskData.push(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },

    // updateData(newData, id) {
    //   axios({
    //     url: `${baseUrl}/tasks/${id}`,
    //     method: 'PUT',
    //     headers: {
    //       access_token: localStorage.getItem('access_token')
    //     },
    //     data: newData
    //   })
    //   .then(res => {
    //     this.fetchData()
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },

    // delete(id) {
    //   swal({
    //     title: 'Are You Sure ?',
    //     text: `You won't be able to recover this task once deleted`,
    //     icon: 'warning',
    //     buttons: true,
    //     dangerMode: true  
    //   })
    //   .then((willDelete) => {
    //     if(willDelete) {
    //       axios({
    //         url: `${baseUrl}/tasks/${id}`,
    //         method: 'DELETE',
    //         headers: {
    //           access_token: localStorage.getItem('access_token')
    //         }
    //       })
    //       .then(res => {
    //         this.fetchData()
    //         swal({
    //           title: 'Succesfully Deleted !',
    //           text: `Selected task has been deleted`,
    //           icon: 'success'
    //         })
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //     } else {
    //       swal({
    //         text: "Your file is safe !"
    //       })
    //     }
    //   })
    // },

    // addTask(data) {
    //   axios({
    //     url: `${baseUrl}/tasks`,
    //     method: 'POST',
    //     headers: {
    //       access_token: localStorage.getItem('access_token')
    //     },
    //     data: data
    //   })
    //   .then(res => {
    //     this.fetchData()
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // },

    // updateCateegory(data) {
    //   axios({
    //     url: `${baseUrl}/tasks`,
    //     method: 'PATCH',
    //     headers: {
    //       access_token: localStorage.getItem('access_token')
    //     },
    //     data: data
    //   })
    //   .then(res => {
    //     this.fetchData()
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }
  },
  created() {
    // if(localStorage.getItem('access_token')) {
    //   this.fetchData()
    //   this.pageName = 'Home Page'
    // } else {
    //   this.pageName = 'Login Page'
    // }
  }
};
</script>

<style scoped>
</style>