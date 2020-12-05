<template>
    <div>
        <div v-if="pageName === 'Login Page'">
        <LoginPage @submitLogin="submitLogin" @changePage="changePage"></LoginPage>
        <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
        </div>
        <MainPage v-else-if="pageName === 'Main Page'" @changePage="changePage" @addCategory="addCategory" @addKanban="addKanban" @editKanban="editKanban" @deleteKanban="deleteKanban" :tasks="tasks" :categories="categories"></MainPage>
        <RegisterPage v-else-if="pageName === 'Register Page'" @submitRegister="submitRegister"></RegisterPage>
        <AddKanbanPage v-else-if="pageName === 'Add Kanban Page'" @submitKanban="submitKanban"></AddKanbanPage>
        <EditKanbanPage v-else-if="pageName === 'Edit Kanban Page'" :title="title" :due_date="due_date" :categories="categories" :CategoryId="CategoryId" @submitUpdateKanban="submitUpdateKanban"></EditKanbanPage>
    </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import axios from 'axios'
import RegisterPage from './components/RegisterPage'
import AddKanbanPage from './components/AddKanbanPage'
import EditKanbanPage from './components/EditKanbanPage'

export default {
    name: "App",
    data () {
        return {
            pageName: 'Login Page',
            email: '',
            password: '',
            tasks: [],
            categories: [],
            id: '',
            title: '',
            due_date: '',
            CategoryId: '',
            clientId: '646065724082-83hk8ie74n49ri3j57niuuphu4fbt5jm.apps.googleusercontent.com'
        }
    },
    methods: {
        changePage(page) {
            this.pageName = page
        },
        submitRegister(name, email, password, organization) {
            axios({
                url: 'http://localhost:3000/register',
                method: 'POST',
                data: {
                    name,
                    email,
                    password,
                    organization
                }
            })
            .then(response => {
                this.changePage("Login Page")
            })
            .catch(error => {
                console.log(error.response)
                this.$alert(error.response.data.message[0])
            })
        },
        submitLogin(email, password) {
            axios({
                url: 'http://localhost:3000/login',
                method: 'POST',
                data: {
                    email,
                    password
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('name', response.data.name)
                this.changePage("Main Page")
                this.fetchTask()
                this.fetchCategory()
            })
            .catch(error => {
                console.log(error.response)
                this.$alert(error.response.data.message[0])
            })
        },
        addCategory(name) {
            axios({
                url: 'http://localhost:3000/category',
                method: 'POST',
                data: {
                    name
                },
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                console.log(response.data)
                this.fetchTask()
                this.fetchCategory()
            })
            .catch(error => {
                console.log(error.response)
                this.$alert(error.response.data.message[0])
            })
        },
        fetchTask() {
            axios({
                url: 'http://localhost:3000/task',
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.tasks = response.data
            })
            .catch(error => {
                console.log(error.response)
                this.$alert(error.response.data.message[0])

            })
        },
        fetchCategory() {
            axios({
                url: 'http://localhost:3000/category',
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.categories = response.data
            })
            .catch(error => {
                console.log(response.data)
                this.$alert(error.response.data.message[0])
            })
        },
        addKanban(page, id) {
            this.id = Number(id)
            this.pageName = page
        },
        submitKanban(title, due_date) {
            axios({
                url: 'http://localhost:3000/task',
                method: 'POST',
                data: {
                    title,
                    due_date,
                    CategoryId: this.id
                },
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.fetchTask()
                this.fetchCategory()
                this.pageName = 'Main Page'
            })
            .catch(error => {
                console.log(error.response)
                this.$alert(error.response.data.message[0])
            })
        },
        editKanban(page, task) {
            this.id = Number(task.id)
            this.getDetailTask()
            this.pageName = page
        },
        getDetailTask() {
            axios({
                url: 'http://localhost:3000/task/' + this.id,
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.title = response.data.title
                this.due_date = response.data.due_date
                this.CategoryId = Number(response.data.CategoryId)
            })
            .catch(error => {
                console.log(error)
                this.$alert(error.response.data.message[0])
            })
        },
        deleteKanban(id) {
            axios({
                url: 'http://localhost:3000/task/' + id,
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response => {
                this.fetchTask()
                this.fetchCategory()
            })
            .catch(error => {
                console.log(error)
                this.$alert(error.response.data.message[0])
            })
        },
        submitUpdateKanban(title, due_date, CategoryId) {
            axios({
                url: 'http://localhost:3000/task/' + this.id,
                method: 'PUT',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    title,
                    due_date,
                    CategoryId
                }
            })
            .then(response => {
                this.fetchCategory()
                this.fetchTask()
                this.pageName = 'Main Page'
            })
            .catch(error => {
                console.log(error)
                this.$alert(error.response.data.message[0])
            })
        },
        OnGoogleAuthSuccess (idToken) {
            axios({
                url: 'http://localhost:3000/googleLogin',
                method: 'POST',
                data: {
                    googleToken: idToken
                }
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('name', response.data.name)
                this.fetchCategory()
                this.fetchTask()
                this.pageName = "Main Page"
            })
            .catch(error => {
                console.log(error)
            })
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    },
    components: {
        LoginPage,
        MainPage,
        RegisterPage,
        AddKanbanPage,
        EditKanbanPage
    },
    created() {
        if (localStorage.getItem('access_token')) {
            this.pageName = 'Main Page'
            this.fetchTask()
            this.fetchCategory()
        } else {
            this.pageName = 'Login Page'
        }
    }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>