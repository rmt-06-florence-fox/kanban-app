<template>
    <div>
        <RegisterPage
            @register="registerNewUser"
            @changePage="changePage"
            v-if="onPage == 'registerPage'"

        ></RegisterPage>
        <LoginPage 
        @login="login" 
            @changePage="changePage"

        v-if="onPage == 'loginPage'"
        
        ></LoginPage>

        <MainPage
        v-if="onPage == 'kanbanBoard' || onPage == 'addPage'"
   
        @logout="logout"
        @changePage="changePage"
        @addTask="addTask"
        @deleteTask='deleteTask'
        @changeCategory="changeCategory"
        @changeTitle="saveEditTitle"


        :onPage="onPage"
        :taskData="task"
        ></MainPage>
    </div>
</template>

<script>
import axios from 'axios'
import LoginPage from './component/LoginPage'
import MainPage from './component/MainPage'
import RegisterPage from "./component/RegisterPage"


export default {
    name : "App",   
    data(){
        return {
            onPage : "",
            task : []
        }
    },
    methods : {

        login(data){
            console.log(data,'login')

            axios({
                method: 'post',
                // url: 'http://localhost:3000/login',
                url : 'https://kanban-server-p2.herokuapp.com/login',
                data: data
            })
            .then(resp =>{
                console.log(resp.data.access_token)
                const acces_token = resp.data.access_token
                localStorage.setItem('access_token', acces_token)
                this.fethcData()
                this.onPage ="kanbanBoard"
                
                // this.onPage = 'kanbanPage'
            })
            .catch(err =>{
                console.log(err,'ini eror')
            })
            .finally(()=>{
                // this.userData.email = ""
                // this.userData.password = ""

            })
        },

        logout(){
            localStorage.removeItem('access_token')
            this.onPage = 'loginPage'
        },
        changePage(page){
            console.log(page, 'app')
            this.onPage = page
        },
        fethcData(){
            const access_token = localStorage.getItem('access_token')
            this.task = []
            axios({
                method : 'get',
                // url : 'http://localhost:3000/task/category',
                url : 'https://kanban-server-p2.herokuapp.com/task/category',
                headers : {
                    access_token  
                }
            })
            .then(resp =>{
                console.log(resp.data.data)
                resp.data.data.forEach( el =>{
                    this.task.push(el)
                })
                console.log(this.task)
                
            })
            .catch(err =>{
                console.log(err)
            })
        },
        addTask(payload){
            console.log(payload,'from app')
            const access_token = localStorage.access_token
            console.log(access_token)
            axios({
                method : 'post',
                // url: "http://localhost:3000/task",
                url : 'https://kanban-server-p2.herokuapp.com/task',
                headers : {
                    access_token },
                data : payload
            }).then(resp =>{
                this.fethcData()
                this.onPage="kanbanBoard"

            }).catch(err =>{
                console.log(err,'gagal')
            })
        },
        deleteTask(id){
            const access_token = localStorage.access_token
            console.log('final',id)
            axios({
                // url : `http://localhost:3000/task/${id}`,
                url : `https://kanban-server-p2.herokuapp.com/task/${id}`,
                method : 'delete',
                headers : {
                    access_token
                }
            }).then(res =>{
                this.fethcData()
                console.log(res)
            }).catch(err =>{
                console.log(err)
            })
        },
        registerNewUser(data){
            console.log(data,'reg')
            axios({
                method: 'post',
                // url: 'http://localhost:3000/register',
                url: 'https://kanban-server-p2.herokuapp.com/register',
                data: data
            })
            .then(resp =>{
                console.log('regis')
                this.onPage = 'loginPage'
            })
            .catch(err =>{
                console.log(err,'ini eror')
            })
            // .finally(()=>{
            //     this.email = ""
            //     this.password = ""

            // })
        },
        changeCategory(categoryId,onId){
            console.log(categoryId,'app',onId)
            const access_token = localStorage.access_token

            axios({
                // url : `http://localhost:3000/task/${onId}`,
                url : `https://kanban-server-p2.herokuapp.com/task/${onId}`,
                method : 'PATCH',
                data : {
                    categoryId : categoryId
                },
                headers : {
                    access_token
                },
            }).then(res =>{
                console.log(res)
                this.fethcData()
            }).catch(err =>{
                console.log(err)
            })


        },
        saveEditTitle(newTitle,categoryId,taskId){
            console.log(newTitle,'app',categoryId,taskId)
            const access_token = localStorage.access_token
            axios({
                // url : `http://localhost:3000/task/${taskId}`,
                url : `https://kanban-server-p2.herokuapp.com/task/${taskId}`,
                method : 'PUT',
                headers : {
                    access_token
                },
                data : {
                    title : newTitle,
                    categoryId : categoryId
                }
            }).then(res =>{
                console.log(res,'sukses')
                this.fethcData()
            }).catch(err =>{
                console.log(err)
            })
        }
    },
    components : {
        LoginPage,
        MainPage,
        RegisterPage
    },
    created(){
        if(localStorage.access_token){
            this.onPage = "kanbanBoard"
            this.fethcData()
        }else  {
            this.onPage = "loginPage"
        }
    }
}
</script>

<style>

</style>