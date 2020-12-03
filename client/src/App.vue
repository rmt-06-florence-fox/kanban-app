<template>
    <div>
        <LoginPage 

        @login="login" 
        v-if="onPage == 'loginPage'"
        
        ></LoginPage>

        <MainPage
        v-if="onPage == 'kanbanBoard' || onPage == 'addPage'"
        @logout="logout"
        @changePage="changePage"
        @addTask="addTask"
        @deleteTask='deleteTask'
        :onPage="onPage"
        :taskData="task"
        ></MainPage>
    </div>
</template>

<script>
import axios from 'axios'
import LoginPage from './component/LoginPage'
import MainPage from './component/MainPage'


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
            console.log(data)
            axios({
                method: 'post',
                url: 'http://localhost:3000/login',
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
                url : 'http://localhost:3000/task/category',
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
                url: "http://localhost:3000/task",
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
                url : `http://localhost:3000/task/${id}`,
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
        }
    },
    components : {
        LoginPage,
        MainPage
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