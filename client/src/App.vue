<template>
    <div>
        <LoginPage v-if="pageName === 'loginPage'" @userLogin="login" @movePage="changePage" @passToken="googleLogin"></LoginPage>
        <RegisterPage v-else-if="pageName === 'registerPage'" @movePage="changePage" @userRegister="register">
        </RegisterPage>
        <div v-else>
            <Navbar @movePage="changePage"></Navbar>
            <div class="container mt-5" v-if="pageName === 'homepage'">
                <div class="row">
                    <BoardList 
                      :category="category" 
                      :tasks="tasks" v-for="(category, i) in categories" :key="i"
                      @getDeleteTaskId="deleteTask"
                      @getEditTaskId="editTask"
                      @getPatchTaskId="patchTask"
                      @passInput="addTask">
                    </BoardList>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BoardList from './components/BoardList.vue'

export default {
    name: 'App',
    data() {
        return {
            pageName: 'loginPage',
            categories: ['Backlog', 'Todo', 'Doing', 'Done'],
            tasks: []
        }
    },
    components: {
        LoginPage,
        RegisterPage,
        Navbar,
        BoardList,
        Footer
    },
    methods: {
        changePage(page) {
            this.pageName = page
        },

        login(email, password) {
            axios({
                    url: 'http://localhost:3000/users/login',
                    method: 'POST',
                    data: {
                        email: email,
                        password: password
                    }
                })
                .then(response => {
                    Swal.fire({
                        title: 'Login Successfull!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Proceed'
                    })

                    localStorage.setItem('access_token', response.data.access_token)
                    this.getTasks()
                    this.pageName = 'homepage'

                })
                .catch(err => {
                    Swal.fire({
                        title: 'Error',
                        text: err.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                })
        },

        googleLogin(token) {
          console.log(token);
          axios({
            url: 'http://localhost:3000/users/googleLogin',
            method: 'POST',
            data: {
              token
            }
          })
          .then(response => {
            Swal.fire({
              title: 'Login Successfull!',
              icon: 'success',
              confirmButtonText: 'Proceed'
            })
            this.pageName = 'homepage'
          })
          .catch(err => {
            console.log(err);
          })
        },

        register(username, email, password, rPassword) {
            if (password === rPassword) {
                axios({
                        url: 'http://localhost:3000/users/register',
                        method: 'POST',
                        data: {
                            username,
                            email,
                            password
                        }
                    })
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: 'User Created',
                            text: `Hello, ${response.data.data.username}. Your account has been created!`,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })

                        this.pageName = 'loginPage'
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            title: 'Error',
                            text: err.response.data.message,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                    })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Password does not match.',
                    icon: 'warning',
                    confirmButtonText: 'Try Again'
                })
            }
        },

        getTasks() {
            axios({
                    url: 'http://localhost:3000/tasks/',
                    method: 'GET',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    console.log(response.data);
                    this.tasks = response.data
                })
                .catch(err => {
                    console.log(error);
                    Swal.fire({
                      title: 'Error',
                      text: err.response.data.message,
                      icon: 'error',
                      confirmButtonText: 'Ok'
                    })
                })
        },

        addTask(input, category) {
          axios({
            url: 'http://localhost:3000/tasks/',
            method: 'POST',
            data: {
              title: input,
              category: category.toLowerCase()
            },
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
          .then(response => {
            Swal.fire({
              title: 'Success',
              text: 'Your task has been added!',
              icon: 'success',
            })

            this.getTasks()
          })
          .catch(err => {
            console.log(err);
            Swal.fire({
              title: 'Error',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          })
        },

        editTask(id, editValues) {
          axios({
            url: `http://localhost:3000/tasks/${id}`,
            method: 'PUT',
            data: {
              title: editValues[0],
              category: editValues[1]
            },
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
          .then(response => {
            Swal.fire({
              title: 'Success',
              text: 'Task edited successfully!',
              icon: 'success'
            })

            this.getTasks()
          })
          .catch(err => {
            console.log(err);
            Swal.fire({
              title: 'Error',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          })
        },

        patchTask(id, category) {
          const currentCatIndex = this.categories.findIndex(element => element.toLowerCase() == category)
          if (currentCatIndex < 3) {
            const newCategories = this.categories[currentCatIndex+1]

            axios({
              url: `http://localhost:3000/tasks/${id}`,
              method: 'PATCH',
              data: {
                category: newCategories.toLowerCase()
              },
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            .then(response => {
              this.getTasks()
            })
            .catch(err => {
              console.log(err);
              Swal.fire({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            })
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Sorry, but the task is already done.',
              icon: 'info',
              confirmButtonText: 'Ok'
            })
          }
        },

        deleteTask(id) {
          axios({
            url: `http://localhost:3000/tasks/${id}`,
            method: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
          })
          .then(response => {
              Swal.fire({
                title: 'Deleted',
                text: 'Data deleted successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })

              this.getTasks()
          })
          .catch(err => {
              console.log(err);
              Swal.fire({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          })
        }
    },

    created() {
        if (localStorage.getItem('access_token')) {
            this.pageName = 'homepage'
            this.getTasks()
        } else {
            this.pageName = 'loginPage'
        }
    }
}
</script>

<style>

</style>