<template>
    <div>
        <entryPage :pageName = "pageName" v-if="entry" 
            @changePage = 'changePage' 
            @axiosLogin= "axiosLogin" 
            @axiosRegist = 'axiosRegist'
            @googleLogin = 'googleLogin'
            >
        </entryPage>
        <navBar v-if="!entry" @logout= 'logout'></navBar>
        <boardList 
            :tasks = 'tasks' 
            @submitEdit = 'submitEdit'
            @addNewTask = 'addNewTask' 
            @destroying = 'destroying'
            v-if="!entry"
            >

        </boardList>
    </div>
</template>

<script>
import swal from 'sweetalert'
import entryPage from './components/entryPage'
import navBar from './components/navBar'
import boardList from './components/boardList'
import taskBoard from './components/taskBoard'
import taskItem from './components/taskItem'
import axios from 'axios'
import GoogleLogin from 'vue-google-login';

export default {
    name: "App",
    data() {
        return {
            entry: true,
            pageName: 'login page',
            tasks : [],
            params: {
                    client_id: "1032301583959-22amjtnotb8e2qbkd1d0vtsn5s9v1hbm.apps.googleusercontent.com"
                },
            // addNewStatus: false
        }
    },
    components: {
        entryPage,
        navBar,
        boardList,
        taskBoard,
        taskItem,
        GoogleLogin,
    },
    methods : {
        changePage(page) {
            this.pageName = page
        },
        addNewTask(payload){
            let access_token = localStorage.access_token
            axios({
                method: 'post',
                url: `http://localhost:3000/tasks`,
                data: payload,
                headers:{access_token}
            })
            .then(response =>{
                this.fetchTask()
            })
            .catch(err =>{
                console.log(err)
            })
        },
        axiosLogin(payload) {
            axios({
                method: 'post',
                url: `http://localhost:3000/login`,
                data: payload
            })
            .then(response =>{
                localStorage.setItem('access_token', response.data.access_token)
                swal("Login Success","you can use Kanban Board Now", "success")
                this.entry = false
                this.fetchTask()
                
            })
            .catch(err =>{
                swal("Invalid Account", "try again", "error")
            })
        },
        axiosRegist(payload){
                axios({
                    method: 'post',
                    url: `http://localhost:3000/register`,
                    data:payload
                })
                .then(response =>{
                    
                    swal("Register Success","please Login", "success")
                    this.pageName = "login page"
                })
                .catch(err =>{
                    this.error = "try another email/password"
                    setTimeout(()=>{
                        this.error = ""
                    }, 4000)
                    console.log(err)
                })
        },
        logout(){
            //  var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function () {
            // console.log('User signed out.');
            // });
            localStorage.clear()
            this.entry = true
            this.pageName = 'login page'
        },
        fetchTask(){
            let access_token = localStorage.access_token
            axios({
                method: 'get',
                url: `http://localhost:3000/tasks`,
                headers:{access_token}
            })
            .then(response =>{
                this.tasks = response.data
            })
            .catch(err =>{
                console.log(err)
            })
        },
        destroying(id){
            let access_token = localStorage.access_token
            axios({
                method: 'delete',
                url: `http://localhost:3000/tasks/${id}`,
                headers:{access_token}
            })
            .then(response =>{
                this.fetchTask()
            })
            .catch(err =>{
                swal('Not your Task', ' ', 'warning')
            })
        },
        submitEdit(payload, id){
            let access_token = localStorage.access_token
            axios({
                method: 'put',
                url: `http://localhost:3000/tasks/${id}`,
                data : payload,
                headers:{access_token}
            })
            .then(response => {
                this.fetchTask()
            })
            .catch(err =>{
                swal('Not your Your Task', ' ', 'warning')

            })
        },
        googleLogin(googleToken){
            axios({
                method: 'post',
                url: `http://localhost:3000/googleLogin`,
                data: {googleToken}
            })
            .then(response =>{
                // console.log(response.data.access_token, '<<<<')
                localStorage.setItem('access_token', response.data.access_token)
                swal("Login Success","you can use Kanban Board Now", "success")
                this.entry = false
                this.fetchTask()
            })
            .catch(err =>{
                console.log(err, ' << errrrror >>>')
            })
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.entry = false
            this.fetchTask()
        } else {
            this.entry = true
            this.pageName = 'login page'
        }
    }
}
</script>

<style>
    .mainBoard {
        margin-top: 100px;
    }

    .edit:hover {
        background-color: rgb(199, 235, 235);
        cursor: pointer;
    }
    .destroy:hover {
        background-color: rgb(235, 186, 177);
        cursor: pointer;
    }

    .newTask:hover {
        font-weight: bolder;
        cursor: pointer;
        color: rgb(59, 170, 124);
    }
    #logo {
        max-height: 50px;

    }
    #img-left {
        max-width: 400px;
        padding-top: 300px;
        margin-left: 70px;
        /* align-self: flex-end; */
    }
</style>