<template>
  <div>
    <LoginRegisterPage
        v-if="pageName === 'Login-register-page'"
        @login="loginToHomePage"
        @register="registerUser"
    ></LoginRegisterPage>
    <HomePage
        @logout="logoutFromHomePage"
        @changePage="ChangePage"
        :pageName="pageName"
        :tasks="tasks"
        :categories="categories"
        v-else
    ></HomePage>
  </div>
</template>

<script>
    import LoginRegisterPage from "./components/LoginRegisterPage";
    import HomePage from "./components/HomePage";
    import axios from 'axios';

    export default {
        name: "App",
        data() {
            return {
                name: "Wellcome",
                pageName: "Login-register-page",
                tasks: [],
                categories: [
                    {
                        name: 'Backlog',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Todo',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Doing',
                        color: 'bg-dark',
                    },
                    {
                        name: 'Completed',
                        color: 'bg-dark',
                    }
                ]
            };
        },
        components: {
            LoginRegisterPage, HomePage
        },
        created() {
            if (!localStorage.getItem('access_token')) {
                this.pageName = 'Login-register-page'
            } else {
                this.pageName = 'Home-page'
            }
        },

        methods: {
            ChangePage(page) {
                this.pageName = page                
            },

            loginToHomePage(user) {
                axios({
                    url: "http://localhost:3000/login",
                    method: "POST",
                    data: { email: user.email, password: user.password },
                })
                .then((response) => {
                    localStorage.setItem("access_token", response.data.access_token);
                    this.pageName = "Home-page"            
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            logoutFromHomePage() {
                this.pageName = 'Login-register-page'
            },

            registerUser(user) {
                axios({
                    url: "http://localhost:3000/register",
                    method: "POST",
                    data: {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        },
                    })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log("register success");
                    })
                }
            },

            fetchTask() {
                axios({
                    url: "http://localhost:3000/tasks",
                    method: "GET",
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    } 
                })
                .then(response => {
                    this.tasks = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    };
                // onSignIn(googleUser) {
            //     // const googleToken = googleUser.getAuthResponse().id_token;
            //     console.log(googleUser);
            //     // axios({
            //     //     method: "POST",
            //     //     url: "http://localhost:3000/googleLogin",
            //     //     data: { googleToken }
            //     // })
            //     // .then(response => {
            //     //     console.log(response)
            //     //     // localStorage.setItem('access_token', response.access_token)
            //     // })
            //     // .catch(error => {
            //     //     console.log(error)
            //     // })
            //     },

</script>

<style>
</style>

