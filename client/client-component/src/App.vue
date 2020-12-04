<template>
  <div>
    <Navbar v-if="pageName !== 'kanban-page'" @changePage="changePage"></Navbar>
    <HomePage v-if="pageName === 'home-page'"></HomePage>
    <LoginPage v-if="pageName === 'form-login'" @login="login"></LoginPage>
    <RegisterPage v-if="pageName === 'form-register'" @register="register" ></RegisterPage>
    <NavbarLogout v-if="pageName === 'kanban-page'" @logOut="logOut"></NavbarLogout>
    <KanbanPage v-if="pageName === 'kanban-page'"></KanbanPage>
  </div>
</template>


<script>
import Navbar from "./components/navbar"
import HomePage from "./components/homePage" // ini liat dari name juga
import LoginPage from "./components/login"
import RegisterPage from "./components/registerLogin"
import KanbanPage from "./components/kanbanPage"
import NavbarLogout from "./components/navbarLogout"
import axios from "axios"

export default {
  name: "App",
  data() {
    return {
      message: 'Hello Febrian',
      pageName: "home-page"
    };
  },
  methods: {
    changePage(page) {
      // console.log(page)
      // console.log(this.pageName, "-------------------------")
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
          url: 'http://localhost:3000/login',
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
          url: 'http://localhost:3000/register',
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
    }
  },
  components: {
    Navbar,
    HomePage,
    LoginPage,
    RegisterPage,
    KanbanPage,
    NavbarLogout
  },
  created() {
    if(localStorage.getItem("acces_token")) {
        this.pageName = "kanban-page"
    } else {
        this.pageName = "home-page"
    }
  }
};
</script>

<style scoped>
</style>