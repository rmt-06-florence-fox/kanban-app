<template>
<div>
   <LoginPage v-if="currentPage === 'login'"
    @changePage='changePage'
    @userLogin='userLogin'
    @googleLogin ='googleLogin'> </LoginPage>
    <RegisterPage v-else-if="currentPage === 'register'" 
    @changePage='changePage'
    @userRegister='userRegister'></RegisterPage>
    <MainPage v-else-if="currentPage === 'mainpage'" 
    @changePage='changePage'
    @userLogout='userLogout'
    @deleteTask='deleteTask'
    @addTask='addTask'
    @editTask='editTask'
    @changeCategoryTask='changeCategoryTask'
    
    :tasks="tasks"
    :category="category"
    
    >
    </MainPage>
</div>

</template>

<script>
import GoogleLogin from 'vue-google-login'
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import MainPage from "./components/MainPage"
import axios from "axios"

export default {
 
  name: "App",
  data() {
    return {
      currentPage: "login",
      tasks: [],
      category: []
    };
  },
   methods:{
    changePage(page){
      this.currentPage = page
    },
    userRegister(userData){
      console.log(userData)
      axios({
         method: "POST",
          url: `"http://localhost:3000/register"`,
          data:{
            name: userData.name,
            email: userData.email,
            password: userData.password
          }
      })
      .then(response=>{
        console.log(response)
        this.currentPage = 'login'
      })
      .catch(err=>{
        console.log(err)
      })

    },
    userLogin(userData){
      axios({
        method: "POST",
          url: "http://localhost:3000/login",
          data:{
            email: userData.email,
            password: userData.password
          }
      })
      .then(response=>{
        console.log(response)
        const {access_token} =response.data
        localStorage.setItem('access_token',access_token)
        this.showSuccess('Login Successful')
        this.currentPage = 'mainpage'
        this.fecthTask()
        this.fecthcategory()
      })
      .catch(err=>{
        this.showError(err)
      })

    },

    googleLogin(value){
      let googleToken = value;
      console.log(googleToken)
      // var profile = googleUser.getBasicProfile();
      // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      axios({
          url: "http://localhost:3000/googleLogin",
          method:"POST",
          data: { 
            googleToken
          }
        })
        .then(response => {
          console.log('masuk done')
          const {access_token} = response.data
          localStorage.setItem('access_token',access_token)
          console.log(response)
         this.currentPage = 'mainpage'
         this.fecthTask()
         this.fecthcategory()

        })
        .catch((err)  => {
          console.log('masuk fail')
          console.log(err );
        })

    },
    userLogout(){
      console.log('userLogout')
      // var auth2 = gapi.auth2.getAuthInstance()
      localStorage.clear()
      this.currentPage='login'
      this.showSuccess(`You have logged out`)
    },
    fecthTask(){
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "GET",
        url: "http://localhost:3000/tasks",
        headers:{
          access_token
        }
      })
      .then (response=>{
        this.tasks = response.data
        // console.log(response)

      })
      .catch(err=>{
        console.log(err)
        this.showError(err)
      })

    },
    fecthcategory(){
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "GET",
        url: "http://localhost:3000/tasks/category",
        headers:{
          access_token
        }
      })
      .then (response=>{
        this.category = response.data

      })
      .catch(err=>{
        console.log(err)
        this.showError(err)
      })

    },

    deleteTask(id){
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "DELETE",
        url: `http://localhost:3000/tasks/${id}`,
        headers:{
          access_token
        }
      })
      .then (()=>{
        this.currentPage = "mainpage"
        this.fecthTask()
      })
      .catch(err=>{
        console.log(err)
        this.showError(err)
      })

    },
    editTask(editedTask,id){
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "PUT",
        url: `http://localhost:3000/tasks/${id}`,
        headers:{
          access_token
        },
        data:{
          title: editedTask.title,
          CategoryId: editedTask.CategoryId
        }
      })
      .then (()=>{
        this.showSuccess("Updated")
        this.currentPage = "mainpage"
        this.fecthTask()
        this.fecthcategory()
       
      })
      .catch(xhr=>{
        console.log(xhr)
        // this.showError(error.message)
      })



    },
    changeCategoryTask(newCatid,id){
       console.log("masuk patch task",newCatid)
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "PATCH",
        url: `http://localhost:3000/tasks/${id}`,
        headers:{
          access_token
        },
        data:{
          CategoryId: newCatid.CategoryId
        }
      })
      .then ((response)=>{
        console.log(response)
        this.showSuccess(`Task ${response.data.title} Moved`)
        this.currentPage = "mainpage"
        this.fecthTask()
      })
      .catch(err=>{
        console.log(err)
        this.showError(err)
      })


    },
    addTask(newData){
      
      console.log("masuk add task")
      const access_token = localStorage.getItem('access_token')
      axios({
        method: "POST",
        url: `http://localhost:3000/tasks`,
        headers:{
          access_token
        },
        data:{
          title: newData.title,
          CategoryId: +newData.category
        }
      })
      .then ((response)=>{
        console.log(response)
        this.showSuccess(`Added ${response.data.title} to category ${response.data.category}`)
        this.currentPage = "mainpage"
        this.fecthTask()
      })
      .catch(err=>{
        console.log(err)
        this.showError(err)
      })




    },
  
    
    showError(message){
     
      this.$toast(message, {
        className : [ 'et-alert', 'my-toast' ],
        horizontalPosition : 'center',
        duration : 3000,
        transition : 'slide-down'
      })

    },
    showSuccess(message){
  
      this.$toast(message, {
        className : [ 'et-info', 'my-toast' ],
        horizontalPosition : 'center',
        duration : 3000,
        transition : 'slide-down'
      })
    }
  },
  components: {
    LoginPage,
    RegisterPage,
    MainPage,
    GoogleLogin
  },
  
   created(){
    if(localStorage.getItem('access_token')){
      this.currentPage = "mainpage"
      this.fecthTask()
      this.fecthcategory()
      
    }
    else{

    }
  },
 
  
  
};
</script>


<style>
.my-toast{
  width : 400px;
  text-align: center;
  font-weight: bold;
  font-size : 1.5rem;
}
</style>