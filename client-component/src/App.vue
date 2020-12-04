<template>
  <div>
      <LoginPage
      v-if="pageName == 'LoginPage'"
      @loggedIn="logIn"
      @registered="register"
      >
      </LoginPage>

      <RegisterPage
      v-if="pageName == 'RegisterPage'"
      @registered="registered"
      :page="pageName"
      >
      </RegisterPage>

      <MainPage
      :backlog="backlogs"
      :todo="todos"
      :doing="doings"
      :done="dones"
      :page="pageName"
      v-else
      @loggedOut="logOut"
      @wentAdd="toAddTask"
      @addTask="addTask"
      @wentUpdate="toUpdateTask"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
      >
      </MainPage>
  </div>
</template>

<script>
import axios from "axios"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import MainPage from "./components/MainPage"

export default {
    name: "App",
    data() {
        return {
            name: "dimas",
            pageName: "LoginPage",
            backlogs: [],
            todos: [],
            doings: [],
            dones: []
        }
    },
    methods: {
        logIn() {
            this.pageName = "MainPage"
        },
        register() {
            this.pageName = "RegisterPage"
        },
        registered() {
            this.pageName = "LoginPage"
        },
        logOut() {
            this.pageName = "LoginPage"
        },
        toAddTask() {
            this.pageName = "TaskForm"
        },
        toUpdateTask(id) {
            this.pageName = "TaskUpdate"
        },
        fetchTasks() {
            axios({
                url: 'http://localhost:3000/tasks',
                method: 'get',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                for(let i = 0; i < response.data.length; i++) {
                    console.log(response.data[i])
                    if(response.data[i].category == 'backlog') {
                        this.backlogs.push(response.data[i])
                    }

                    else if(response.data[i].category == 'todo') {
                        this.todos.push(response.data[i])
                    }

                    else if(response.data[i].category == 'doing') {
                        this.doings.push(response.data[i])
                    }

                    else if(response.data[i].category == 'done') {
                        this.dones.push(response.data[i])
                    }
                }

            })
            .catch(err => {
                console.log(err)
            })
        },
        addTask(task) {
            axios({
                url: 'http://localhost:3000/tasks',
                method: 'post',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: task.title,
                    category: task.category
                }
            })
            .then(response => {
                console.log(response, 'Successfully added')
                this.pageName = "MainPage"
            })
            .catch(err => {
                console.log(err)
            })
        },
        updateTask(task) {
            console.log(task, 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOo')
            axios({
                url: 'http://localhost:3000/tasks/' + localStorage.getItem('updateId'),
                method: 'put',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title: task.title,
                    category: task.category
                }
            })
            .then(response => {
                console.log(response, 'Successfully updated')
                localStorage.removeItem('updateId')
                this.pageName = "MainPage"
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask(id) {
            axios({
                url: 'http://localhost:3000/tasks/' + id,
                method: 'delete',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                console.log(response, 'Successfully deleted')
                this.pageName = "MainPage"
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    components: {
        LoginPage,
        MainPage,
        RegisterPage
    },
    created() {
        if(localStorage.getItem('access_token')) {
            this.pageName = "MainPage"
            this.fetchTasks()
        }
        else {
            this.pageName = "LoginPage"
        }
    }
}
</script>

<style>

</style>