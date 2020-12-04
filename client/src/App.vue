<template>
  <div>
    <loginPage @lemparGoogleToken="googleSignin" @changeRegisterPage="changeRegisterPage" @login="loginUser" v-if="pageName == 'login page'" ></loginPage>
    <mainPage @lemparEditCategory="editCategory" @lemparNewCategory="addCategory" @changeLoginPage="changeLoginPage" @lemparDeleteId="deleteTask" @lemparPayloadEditKeApp="editTask" @lemparNewTask="terimaNewTask" :categoryList="categories" v-else-if="pageName == 'main page'"></mainPage>
    <registerPage @lemparNewOrganization="createOrganization" @registerEmit="register" :organizations="organizations" v-else-if="pageName == 'register page'"></registerPage>
  </div>
</template>
<script>
import axios from 'axios'
import draggable from 'vuedraggable'

import loginPage from "./components/login"
import mainPage from "./components/main"
import registerPage from "./components/register"

export default {
  name: "App",
  data() {
    return {
      pageName: "login page",
      url: "http://localhost:3000",
      categories: [],
      organizations: [],
      userEmail: '',
      userOrganization: ''
    }
  },
  components: {
    loginPage,
    mainPage,
    registerPage,
    draggable
  },
  methods: {
    changeRegisterPage(){
      this.pageName = 'register page'
    },
    changeLoginPage(){
      this.pageName = 'login page'
    },   
    createOrganization(payload){
        axios({
        url: `${this.url}/organization`,
        method: `POST`,
        data: {
            name: payload
        }      
      })
      .then(res => {
        this.fetchOrganization()
        this.pageName = 'register page'
      })
      .catch(err => {
        console.log(err)
      })
    },
    editCategory(payload){
        axios({
        url: `${this.url}/task/${payload.id}`,
        method: `PATCH`,
        data:{
          category: payload.category
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        this.fetchCatagory()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    addCategory(title){
      console.log(title, 'from app')
      axios({
        url: `${this.url}/category`,
        method: `POST`,
        data: {
            title
        },
        headers: {
          access_token: localStorage.access_token
        }             
      })
      .then(res => {
        this.fetchCatagory()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    register(payload){
      axios({
        url: `${this.url}/register`,
        method: `POST`,
        data: {
            email: payload.email,
            password: payload.password,
            organizationName: payload.organization
        }        
      })
      .then(res => {
        swal(`REGISTER SUCCESS`)
        this.pageName = 'login page'
      })      
      .catch(err => {
        swal('REGISTER ERROR')
      })
      .finally(()=> {
          this.email = ''
          this.password = ''
      })
    },
    deleteTask(id){
      axios({
        url: `${this.url}/task/${id}`,
        method: `DELETE`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        swal(`DELETE SUCCESS`)
        this.fetchCatagory()
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    terimaNewTask(payload){
      axios({
        url: `${this.url}/task`,
        method: `POST`,
        data:{
          title: payload.title,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        swal(`ADD NEW TASK SUCCESS`)
        this.fetchCatagory()
      })
      .catch(err => {
        console.log(err)
      })
    },
    googleSignin(googleToken){
      axios({
        url: `${this.url}/googleLogin`,
        method: 'POST',
        data: {
          googleToken
        } 
      })
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        this.fetchCatagory()
        this.pageName = 'main page'
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    loginUser(payload){
       axios({
            url: ` ${this.url}/login`,
            method: 'POST',
            data: {
                email: payload.email,
                password: payload.password
            }
        })
        .then( res => {
          localStorage.setItem('name', res.data.data.email.split('@')[0])
          localStorage.setItem('access_token', res.data.access_token)
          this.pageName = 'main page'
          this.userEmail = res.data.data.email,
          this.userOrganization = res.data.data.Organization.name
          this.fetchCatagory()

        })
        .catch( err => {
            console.log(err)
        })
        .finally(()=> {
            this.email = ''
            this.password = ''
        })
    },
    editTask(payload){
      axios({
        url: `${this.url}/task/${payload.id}`,
        method: `PUT`,
        data:{
          title: payload.title,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(res => {
        swal(`EDIT SUCCESS`)
        this.fetchCatagory()
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchCatagory(){
      axios({
        url: `${this.url}/category`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res)
        this.categories = res.data
        this.pageName = 'main page'
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchOrganization(){
      axios({
        url: `${this.url}/organization`,
        method: 'GET',
      })
      .then(res => {
        this.organizations = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }    
  },
  created(){
      if(localStorage.getItem('access_token')){
      this.fetchCatagory()
    } else {
      this.pageName = 'login page'
      this.fetchOrganization()
    }
  }
}
</script>

<style scoped>
</style>