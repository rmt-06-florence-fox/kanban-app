<template>
  <div>
    <Navbar v-if="pageName !== 'kanban-page'" @changePage="changePage"></Navbar>
    <HomePage v-if="pageName === 'home-page'"></HomePage>
    <LoginPage v-if="pageName === 'form-login'" @login="login" @changePage="changePage" @changePageWithAccesToken="changePageWithAccesToken"></LoginPage>
    <RegisterPage v-if="pageName === 'form-register'" @register="register" ></RegisterPage>
    <NavbarLogout v-if="pageName === 'kanban-page'" @logOut="logOut"></NavbarLogout>
    <KanbanPage v-if="pageName === 'kanban-page'" :tasks="tasks" @edit="edit" @cancel="cancel" @changePage="changePage" @deleteData="deleteData"></KanbanPage>
    <FormAdd v-if="pageName === 'form-add'" @addTodo="addTodo"></FormAdd>
  </div>
</template>

<script>
import Navbar from "./components/navbar"
import HomePage from "./components/homePage" // ini liat dari name juga
import LoginPage from "./components/login"
import RegisterPage from "./components/registerLogin"
import NavbarLogout from "./components/navbarLogout"
import FormAdd from "./components/addTask"
import KanbanPage from "./components/KanbanPage"
import Swal from 'sweetalert2'
import axios from "axios"

export default {
  name: "App",
  data() {
    return {
      message: 'Hello Febrian',
      pageName: "home-page",
      tasks: []
    };
  },
  methods: {
    changePage(page) {
      this.pageName = page
    },

    login(email, password) {
      // console.log(email, password)
      let objUser = {
        email,
        password
      }
      axios({
          method: 'post',
          url: 'https://kanban-febrian.herokuapp.com/login',
          data: objUser
      })
        .then(data => {
          // console.log(data.data.acces_token)
          localStorage.setItem("acces_token", data.data.acces_token)
          this.pageName = "kanban-page"
        })
        .catch(err => {
          console.log(err)
        })
    },

    register(firstName, lastName, email, password) {
      let objData = {
        firstName,
        lastName,
        email,
        password
      }
      // console.log(objData)
      axios({
          method: 'post',
          url: 'https://kanban-febrian.herokuapp.com//register',
          data: objData
      })
        .then(data => {
          this.pageName = "form-login"
        })
        .catch(err => {
          console.log(err)
        })
    },

    logOut(homePage) {
       localStorage.clear()
       this.pageName = homePage
    },

    getAllDataTasks() {
      axios({
        method: "GET",
        url: 'https://kanban-febrian.herokuapp.com/',
        headers: {
              acces_token: localStorage.getItem("acces_token")
            }
      })
        .then(data => {
          // console.log(data.data)
          this.tasks = data.data
          // this.created()
          // console.log(this.tasks)
        })
        .catch(err => {
          console.log(err)
        })
    },

    edit(objEdit) {
      // console.log(objEdit, "--------")
      axios({
        method: "PUT",
        url: 'https://kanban-febrian.herokuapp.com/'+objEdit.id,
        headers: {
              acces_token: localStorage.getItem("acces_token")
            },
        data: objEdit
      })
        .then(({ data }) => { // cara ini bisa digunakan untuk mengambil data langsung
          this.changePage("kanban-page")
          this.getAllDataTasks()
        })
        .catch(err => {
            console.log(err)
        })
    },


    addTodo(title, category) {
      
      let objTask = {
        title,
        category
      }
      // console.log(objTask)
      axios({
        method: "POST",
        url: 'https://kanban-febrian.herokuapp.com/',
        headers: {
              acces_token: localStorage.getItem("acces_token")
            },
        data: objTask
      })
        .then(data => { 
          //  this.created()
          // console.log("-----------")
          this.changePage("kanban-page")
          this.getAllDataTasks()
          // this.changePage("kanban-page")
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteData(id) {
      // console.log("-1-1-1-1")
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              method: "delete",
              url: 'https://kanban-febrian.herokuapp.com/'+id,
              headers: {
                    acces_token: localStorage.getItem("acces_token")
                  },
            })
              .then(({ data }) => {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                this.getAllDataTasks()
                
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
    },

  },
  components: {
    Navbar,
    HomePage,
    LoginPage,
    RegisterPage,
    KanbanPage,
    NavbarLogout,
    FormAdd
  },
  created() {
    if(localStorage.getItem("acces_token")) {
        this.pageName = "kanban-page"
        this.getAllDataTasks()
    } else {
        this.pageName = "home-page"
    }
  }
};
</script>

<style scoped>
</style>