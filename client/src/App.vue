<template>
    <div>
        <LoginPage
            v-if = "curentPage == 'login-page'"
            @changePage= "toPage"
            @login = "login"
            @onSuccess = "onSuccess"
            
        ></LoginPage>
        <RegisterPage
            v-else-if = "curentPage == 'register-page'"
            @changePage= "toPage"
            @register= "register"
        ></RegisterPage>
        <MainPage
            v-else-if = "curentPage == 'main-page'"
            @logout = "logout"
            :tasks = "tasks"
            @addTask = "addTask"
            @deleteTask = "deleteTask"
            @nextTask = "nextTask"
            @undoTask = "undoTask"
        ></MainPage>
    </div>
</template>

<script>
const URL = "http://localhost:3000"
const access_token = localStorage.getItem("access_token");
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage' 
import MainPage from './components/MainPage' 
import axios from 'axios'
export default {
    name: "App",
    data() {
        return {
            curentPage: "login-page",
            tasks: []
        }
    },
    components: {
        RegisterPage,
        LoginPage,
        MainPage
    },
    methods: {
        toPage(page) {
            console.log(page);
            this.curentPage = page
        },
        register(payload) {
            axios({
                method: "POST",
                url: URL + "/register",
                data: payload
            })
            .then(({data}) => {
                this.$swal(
                    "Register Success",
                    `${data.email}, please login`,
                    "success"
                );
                this.curentPage = "login-page"
            })
            .catch(err => {
                this.$swal(
                    "",
                    `error ${err.response.status} :  ${err.response.data.error[0]}`,
                    "error"
                );
            });
        },
        login(payload) {
            axios({
                method: "POST",
                url: URL + "/login",
                data: payload
            })
            .then(({data}) => {
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("name", data.name);
                this.$swal(
                    "",
                    `welcome, ${data.name}`,
                    "success"
                );
                this.curentPage = "main-page"
                this.fetch()
            })
            .catch(err => {
                this.$swal(
                    "",
                    `error ${err.response.status} :  ${err.response.data.message}`,
                    "error"
                );
            });
        },
        logout() {
            this.curentPage = "login-page";
            localStorage.clear();
        },
        fetch() {
            axios({
                method: "GET",
                url: URL + "/tasks",
                headers: { access_token }
            })
            .then(({ data }) => {
                this.tasks = data;
            })
            .catch(err => {
                this.$swal(
                    "",
                    `error ${err.response.status} : failed to show task, ${err.response.data.message}`,
                    "error"
                );
            });
        },
        onSuccess(idToken) {
            console.log(idToken, "sdfasdfawre");
            axios({
                method: "POST",
                url: URL + "/googleLogin",
                data: { idToken }
            })
            .then(({data}) => {
                console.log(data);
                localStorage.setItem("access_token", data.access_token);
                this.$swal(
                    "",
                    `welcome`,
                    "success"
                );
                this.curentPage = "main-page"
                this.fetch()
            }).
            catch(err => {
                console.log("masuk catch");
                this.$swal(
                    "",
                    `error ${err.response.status} :  ${err.response.data.message}`,
                    "error"
                );
            });
        },
        addTask(payload) {
            console.log(payload);
            axios({
                url: URL + "/tasks",
                mothod: "POST",
                data: payload,
                headers: { access_token }
            })
            .then(data => {
                console.log(data);
                console.log("test");
                this.fetch()
            })
            .catch(err => {
                this.$swal(
                    "",
                    `error ${err.response.status} :  ${err.response.data.message}`,
                    "error"
                );
            });
        },
        deleteTask(id) {
            axios({
                method: "DELETE",
                url: URL + `/tasks/${id}`,
                headers: { access_token }
            })
            .then(() => {
                this.fetch()
            }).catch((err) => {
                console.log(err);
            });
        },
        nextTask(id) {
            axios({
                method: "PATCH",
                url: URL + `/tasks/${id.id}`,
                data: {
                    CategoryId: id.CategoryId
                },
                headers: { access_token }
            })
            .then(() => {
                this.fetch()
            }).catch((err) => {
                console.log(err);
            });
        },
        undoTask(id) {
            axios({
                method: "PATCH",
                url: URL + `/tasks/${id.id}`,
                data: {
                    CategoryId: id.CategoryId
                },
                headers: { access_token }
            })
            .then(() => {
                this.fetch()
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    created() {
            if (access_token) {
                this.fetch();
                this.curentPage = "main-page";
            } else {
                this.curentPage = "login-page";
            }
    }
}
</script>

<style>

</style>