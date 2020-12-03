<template>
    <div>
        <entryPage :pageName = "pageName" v-if="entry" @changePage = 'changePage' @axiosLogin= "axiosLogin" @axiosRegist = 'axiosRegist'></entryPage>
        <navBar v-if="!entry" @logout= 'logout'></navBar>
        <boardList @addNewTask = 'addNewTask' v-if="!entry">

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
import addNew from './components/addNew'

export default {
    name: "App",
    data() {
        return {
            entry: true,
            pageName: 'login page',
            // addNewStatus: false
        }
    },
    components: {
        entryPage,
        navBar,
        boardList,
        taskBoard,
        taskItem,
        addNew
    },
    methods : {
        changePage(page) {
            this.pageName = page
        },
        addNewTask(payload){
            console.log(payload, 'from app vue')
            let access_token = localStorage.access_token
            axios({
                method: 'post',
                url: `http://localhost:3000/tasks`,
                data: payload,
                headers:{access_token}
            })
            .then(response =>{
                console.log(response.data)
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
            localStorage.clear()
            this.entry = true
            this.pageName = 'login page'
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.entry = false
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