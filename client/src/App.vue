<template>
    <div>
        <Navbar 
            :currentPage="this.currentPage"
            @changePage="changePage"
        >
        </Navbar>

        <div v-if="currentPage === 'userPage'">
            <!-- Main Page-->
            <Main
                :kanbanBoard="kanbanBoard"
                @addTask="addTask"
                @removeTask="removeTask"
                @editTask="editTask"
            >
            </Main>
        </div>
        
        <div v-else>
            <div v-if="currentPage === 'registerPage'">
                <Register 
                    @changeThisPage="changePage"
                    @register="register"
                    >
                </Register>
            </div>

            <div v-else-if="currentPage === 'loginPage'">
                <Login 
                    @changeThisPage="changePage"
                    @login="login"
                    @googleLogin="googleLogin"
                    >
                </Login>
            </div>
        </div>
        
        <Footer></Footer>
    </div>
    
</template>

<script>
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/MainPage";

// Nu kararitu lah pokokna ieu
import axios from "axios";
import Swal from "sweetalert2";



export default {
    name: "App",
    data(){
        return {
            name: "Rz",
            currentPage: '',
            baseUrl: "http://localhost:3000/",
            kanbanBoard: []
        }
    },
    methods: {
        changePage(toThisPage){
            this.currentPage = toThisPage
        },
        fetchKanbanBoard(){
            axios({
                method: "GET",
                url: `${this.baseUrl}category`,
                headers: {access_token: localStorage.getItem('access_token')},
            })
            .then((response)=>{
                this.kanbanBoard = response.data;
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        register(payload){
            axios({
                method: "POST",
                url: `${this.baseUrl}user/register`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then((response) =>{
                return Swal.fire({
                    icon: 'success',
                    title: 'Account Created!',
                    text: 'You can now login with your new account'
                })
            })
            .then((result)=>{
                if(result.isConfirmed){
                    this.currentPage = 'loginPage'
                }
            })
            .catch((error)=>{

            })
        },
        login(payload){
            axios({
                method: "POST",
                url: `${this.baseUrl}user/login`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then((response)=>{
                console.log(response);
                localStorage.setItem("access_token", response.data.access_token);
                return Swal.fire({
                    icon: 'success',
                    title: 'Success Logged In!',
                    text: 'Have a Fancy Day!'
                })
            })
            .then((result)=>{
                if(result.isConfirmed){
                    this.fetchKanbanBoard();
                    this.currentPage = 'userPage'
                }
            })
            .catch((error) =>{
                console.log(error);
                if(error.response.status === 401){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oh Noo!',
                        text: 'Incorrect Email or Password',
                        footer: "You can Register for new account if you don't have any"
                    })
                }
            })
        },
        addTask(payload){
            console.log(payload);
            axios({
                method: "POST",
                url: `${this.baseUrl}task`,
                data: payload,
                headers: {access_token: localStorage.getItem('access_token')}
            })
            .then((response)=>{
                console.log(response.data);
                this.fetchKanbanBoard();
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Task Added!'
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        removeTask(id){
            console.log(id);
            axios({
                method: "DELETE",
                url: `${this.baseUrl}task/${id}`,
                headers: {access_token: localStorage.getItem("access_token")}
            })
            .then((response)=>{
                Swal.fire({
                        icon: 'success',
                        title: "YEAY!",
                        text: 'Task Deleted',
                        footer: "Don't Ask me to recover it"
                    })
                this.fetchKanbanBoard();
            })
            .catch((error)=>{
                console.log(error);
                if(error.response.status === 401){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oh No!',
                        text: 'You are not authorized to Delete this task',
                        footer: "You need to login as owner of this task"
                    })
                }
            })
        },
        editTask(payload){
            // console.log(payload)
            axios({
                method: "PUT",
                url: `${this.baseUrl}task/${payload.TaskId}`,
                data: {
                    title: payload.title,
                    description: payload.description
                },
                headers: {access_token: localStorage.getItem("access_token")}
            })
            .then((response)=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Task Edited!'
                })
                this.fetchKanbanBoard();
            })
            .catch((error)=>{
                if(error.response.status === 401){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oh No!',
                        text: 'You are not authorized to edit this task',
                        footer: "You need to login as owner of this task"
                    })
                }
                console.log(error);
            })
        },
        googleLogin(payload){
            payload.password = 'cobaCobaDulu'
            axios({
                method: "POST",
                url: `${this.baseUrl}user/register`,
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then((response) =>{
                
            })
        }
    },
    components: {
        Navbar,
        Footer,
        Login,
        Register,
        Main
    },
    created(){
        if(localStorage.getItem("access_token")){
            this.currentPage = "userPage";
            this.fetchKanbanBoard();
        } else {
            this.currentPage = "loginPage"
        }
    }
}
</script>

<style>

</style>