<template>
  <div>
      <LoginPage @postLogin="login" @postRegister="register" v-if="page == 'login'"
      :error="errorLogin"
      ></LoginPage>
      <MainPage @logout="logout" v-if="page == 'main'" :tasks="tasks" @bukaMain="fetchAll"></MainPage>
  </div>
</template>

<script>
const SERVER = 'http://localhost:3000'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'

import axios from 'axios'
export default {
    name:'kepala',
    components:{
        LoginPage,
        MainPage
    },
    data(){
        return{
            page: 'login',
            errorLogin:{
                login:'',
                register:''
            },
            tasks:{
                Backlog:[],
                Todo:[],
                Doing:[],
                Done:[]
            }
        }
    },
    methods:{
        login(obj){
            axios({
                url: `${SERVER}/login`,
                method: 'POST',
                data:{
                    email: obj.email ,
                    password: obj.password
                }
            })
                .then(({data})=>{
                    localStorage.setItem('access_token',data.access_token)
                    this.errorLogin = {
                        login:'',
                        register: ''
                    }
                    this.page = 'main'
                })
                .catch(err=>{
                    console.log(err.response.data);
                    this.errorLogin.login = err.response.data.msg
                })
        },
        register(obj){
            axios({
                url: `${SERVER}/register`,
                method: 'POST',
                data:{
                    email: obj.email ,
                    password: obj.password
                }
            })
                .then(({data})=>{
                    console.log(data);
                    this.errorLogin = {
                        login:'',
                        register: ''
                    }
                    this.login(obj)
                })
                .catch(err=>{
                    console.log(err.response);
                    this.errorLogin.register = err.response.data.msg
                })
        },
        logout(){
            localStorage.clear()
            this.page = 'login'
        },
        fetchAll(){
            axios({
                url: `${SERVER}/tasks`,
                method: 'GET',
                headers:{
                    access_token : localStorage.getItem('access_token')
                }
            })
                .then(({data})=>{
                    this.tasks = {
                        Backlog: [],
                        Todo: [],
                        Doing: [],
                        Done: []
                    }
                    data.allTask.forEach((el,i)=>{
                        if(el.state == 'Backlog') this.tasks.Backlog.push(el)
                        else if(el.state == 'Todo') this.tasks.Todo.push(el)
                        else if(el.state == 'Doing') this.tasks.Doing.push(el)
                        else if(el.state == 'Done') this.tasks.Done.push(el)
                    })
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.page = 'main'
        }else if(!localStorage.getItem('access_token')){
            this.page = 'login'
        }
    }
}
</script>

<style>

</style>