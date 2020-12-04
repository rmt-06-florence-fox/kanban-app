<template>
   <div>
      <LandingPage @getPage="changePage" v-if="currPage ==='landingPage'"></LandingPage>
      <loginpage @googleLogin='googleLogin' @login='login' @getPage="changePage" v-else-if="currPage === 'loginPage'"></loginpage>
      <RegisterPage v-else-if="currPage ==='registerPage'" @getPage="changePage" @register="register"></RegisterPage>
      <HomePage
       @getCategories='fetchCategories' 
       @getPage='changePage' 
       v-else-if="currPage ==='homePage'"
       :categories='categories'
       @addTask='addTask'
       @getTasks='fetchTask'
       :tasks='tasks'
       @destroy='deleteTask'
       @postEdit='postEdit'
      >
      </HomePage>
   </div>
</template>

<script>
import axios from 'axios' 
import loginpage from './components/LoginPage'
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import 'regenerator-runtime/runtime'

export default {
   name:'App',
   data(){
      return {
         message:'Test',
         currPage:'landingPage',
         baseUrl:'http://localhost:3000',
         categories:[],
         tasks:[]
      }
   },
   components:{
      loginpage,
      LandingPage,
      RegisterPage,
      HomePage
   },
   methods:{
      async register(data){
         try {
           const response = await axios({
               url:this.baseUrl+'/register',
               method:'POST',
               data
            })
           this.changePage('loginPage')
         // console.log(data)
        }catch (error) {
           console.log(error)
        }
      },
      async login(data){
         try {
            const response = await axios({
               url:this.baseUrl+'/login',
               method:'POST',
               data
            })
            localStorage.setItem('userId',response.data.userId)
            localStorage.setItem('access_token',response.data.access_token)
            this.changePage('homePage')
         }catch (error) {
            console.log(error)
         }
      },
      async googleLogin(googleToken){
         const data={
            googleToken:googleToken
         }
         try {
            const response = await axios({
               url:this.baseUrl+'/googleLogin',
               method:'POST',
               data
            })
            localStorage.setItem('userId',response.data.userId)
            localStorage.setItem('access_token',response.data.access_token)
            console.log(response.data)
            this.changePage('homePage')
         }catch (error) {
            console.log(error)
         }
      },
      async fetchCategories(){
         try {
            const response = await axios({
               url:this.baseUrl+'/categories',
               method:'GET',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            console.log(response)
            this.categories = response.data.data
         } catch (error) {
            console.log(error.response.data.message)
         }
      },
      async addTask(data){
         // const data = {
         //    title:this.addTitle,
         //    CategoryId:this.addCategories
         // }

         try {
            const response = await axios({
               url:this.baseUrl+'/tasks',
               method:"POST",
               headers:{
                  access_token:localStorage.getItem('access_token')
               },
               data
            })
            
            Swal.fire('succcess')
            this.fetchTask()
            //this.changePage('homePage')
         } catch (error) {
            console.log(error)
         }
      },
      async fetchTask(){
         try {
            console.log('fetchTask')
            const response = await axios({
               url:this.baseUrl+'/tasks',
               method:'GET',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            this.tasks = response.data.data
         } catch (error) {
            console.log(error)
         }
      },
      async deleteTask(id){
         try {
            const response = await axios({
               url:this.baseUrl+'/tasks'+`/${id}`,
               method:'DELETE',
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            Swal.fire('Success Delete')
            this.fetchTask()
            //this.changePage('homePage')
         } catch (error) {
            console.log(error)
         }
      },
      async postEdit(data){
         console.log('editing')
         console.log(data.data)
         try {
            const response = await axios({
               url: this.baseUrl + '/tasks/' + data.id,
               method:'PUT',
               data:data.data,
               headers:{
                  access_token:localStorage.getItem('access_token')
               }
            })
            this.fetchTask()
            console.log(response)
         } catch (error) {
            console.log(error)
         }
      },
      changePage(target){
         console.log('change page app')
         console.log(target)
         this.currPage = target
      }
   },
   created(){
      const access_token = localStorage.getItem('access_token')
      if(access_token){
         this.fetchTask()
         this.currPage='homePage'
      }else{
         this.currPage='landingPage'
      }
   }
}
</script>

<style>

</style>