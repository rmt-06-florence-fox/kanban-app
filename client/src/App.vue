<template>
  <div>
  <Navbar :pageName="pageName" @logoutButton='logout' ></Navbar>
    <login v-if="pageName === 'Login Page'" @changePage='changePage' @dataLogin='login'></login>
    <register v-if="pageName === 'Register Page'" @dataRegist='regist'></register>
    <TaskBoard 
      v-if="pageName === 'Home Page'" 
      :categories="categories"
      :dataTasks='dataTasks'
      @idDelete='deleteData'
      @createTask='createTask'
      @updateData='updateData'
      @updateCategory='updateCategory'>
    </TaskBoard>
  </div>
</template>

<script>
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import BoardList from "./components/BoardList";
import TaskBoard from "./components/TaskBoard";
import TaskItem from "./components/TaskItem";
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      baseUrl : 'httpK//localhost:3000/',
      pageName: 'Login Page',
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
    NavBar, BoardList, TaskBoard, TaskItem
  },
  methods: {
    changePage(page) {
      this.pageName = page
    },

    register(data) {
      axios({
        url: `${baseUrl}/register`,
        method: 'POST',
        data: data
      })
      .then(res => {
        this.pageName = 'Login Page'
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
      axios({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: data
      })
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('email', res.data.email)
        this.pageName = 'Home Page'
        this.fetchData()
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
          text: err.res.data.messages,
          icon: 'error'
        })
      })
    },
    logout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      this.pageName = 'Login Page'
    },
    fetchData() {
      axios({
        url: `${baseUrl}/tasks`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        this.taskData.push(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    updateData(newData, id) {
      axios({
        url: `${baseUrl}/tasks/${id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: newData
      })
      .then(res => {
        this.fetchData()
      })
      .catch(err => {
        console.log(err)
      })
    },

    delete(id) {
      swal({
        title: 'Are You Sure ?',
        text: `You won't be able to recover this task once deleted`,
        icon: 'warning',
        buttons: true,
        dangerMode: true  
      })
      .then((willDelete) => {
        if(willDelete) {
          axios({
            url: `${baseUrl}/tasks/${id}`,
            method: 'DELETE',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
          .then(res => {
            this.fetchData()
            swal({
              title: 'Succesfully Deleted !',
              text: `Selected task has been deleted`,
              icon: 'success'
            })
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          swal({
            text: "Your file is safe !"
          })
        }
      })
    },

    addTask(data) {
      axios({
        url: `${baseUrl}/tasks`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: data
      })
      .then(res => {
        this.fetchData()
      })
      .catch(err => {
        console.log(err)
      })
    },

    updateCateegory(data) {
      axios({
        url: `${baseUrl}/tasks`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: data
      })
      .then(res => {
        this.fetchData()
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    if(localStorage.getItem('access_token')) {
      this.fetchData()
      this.pageName = 'Home Page'
    } else {
      this.pageName = 'Login Page'
    }
  }
};
</script>

<style scoped>
</style>