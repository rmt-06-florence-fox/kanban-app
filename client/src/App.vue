<template>
  <LoginPage @changeCurentPage="changePage" v-if="curentPage === 'loginPage'"></LoginPage>
  <MainPage @editTask='editThisTask' @deleteTask='deleteThisTask' @createNewTask="createTask" :dataTask='tasks' @test='fetchTask' @hasBeenLogout="changePage" @updateThisTask='updateTask' v-else></MainPage>
</template>

<script>
import LoginPage from "./components/LoginPage"
import MainPage from "./components/MainPage"
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: "App",
  data() {
    return {
      name: 'Andhika',
      curentPage: 'loginPage',
      url: 'https://kanban-app-amp.herokuapp.com',
      tasks: []
      
    }
  },
  methods: {
    changePage(page) {
      this.curentPage = page
      if (page === 'mainPage') {
        this.fetchTask()
      }
    },
    fetchTask() {
      axios({
        url: `${this.url}/categories`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((response) => {
        // console.log(response.data)
        this.tasks = response.data
      })
      .catch((err) => {
        console.log(err)
      })
    },
    createTask(newTask) {
      axios({
        url: `${this.url}/tasks`,
        method: 'POST',
        data: {
          title: newTask.taskTitle,
          description: newTask.taskDescription,
          CategoryId: newTask.taskCategoryId
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((data) => {
        Swal.fire({
					icon: 'success',
					title: 'Nice !',
					text: 'Your new Task has been Created',
        })
        this.fetchTask()
      })
      .catch((err) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
        })
        console.log(err)
      })
    },
    deleteThisTask(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `${this.url}/tasks/${id}`,
            method: 'DELETE',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
          .then((data) => {
            Swal.fire({
              icon: 'success',
              title: 'Okay..',
              text: 'Your task has been Deleted',
            })
            this.fetchTask()
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Are you sure this is your task?',
            })
          })
        }
      })
      
    },
    editThisTask(editTask) {
      // console.log(editTask, 'dari app')
      const id = editTask.editTaskId
      const title = editTask.editTitle
      const description = editTask.editDescription
      const CategoryId = editTask.editCategory

      axios({
        url: `${this.url}/tasks/${id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title,
          description,
          CategoryId
        }
      })
      .then((response) => {
        Swal.fire({
					icon: 'success',
					title: 'Nicee!',
					text: 'Your task has been Edited',
        })
        this.fetchTask()
      })
      .catch((err) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Are you sure this is your task?',
        })
        console.log(err)
      })
    },
    updateTask(updatedTask) {
      // console.log(updatedTask, 'dari app')
      const id = updatedTask.id
      const CategoryId = updatedTask.CategoryId
      axios({
        url: `${this.url}/tasks/${id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          CategoryId
        }
      })
      .then((response) =>{ 
        Swal.fire({
					icon: 'success',
					title: 'Nicee!',
					text: 'Your Task Category has been Updated',
        })
        this.fetchTask()
      })
      .catch((err) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Are you sure this is your task?',
        })
        console.log(err)
      })
    }
  },
  components: {
    LoginPage,
    MainPage
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.curentPage = 'mainPage'
      this.fetchTask()
    } else {
      this.curentPage = 'loginPage'
    }
  },
  
}
</script>

<style>

</style>