<template>
  <div>
    <LoginPage
      v-if="pageName == 'loginPage'"
      @changePage="changePage"
      @login='login'
      @onSuccess='onSuccess'
    ></LoginPage>

    <RegisterPage
      v-else-if="pageName == 'registerPage'"
      @changePage="changePage"
    ></RegisterPage>

    <HomePage
      v-else-if="pageName == 'homePage'"
      :tasks="tasks"
      :categories="categories"
      @changePage="changePage"
      @deleteTask="deleteTask"
      @moveTask='moveTask'
      @logout='logout'
      @editTask='editTask'
    ></HomePage>

    <AddComponent
      v-else-if="pageName == 'addPage'"
      :addCategory="addCategory"
      @createTask="createTask"
    >
    </AddComponent>
    
    <EditComponent
      v-else-if="pageName == 'editPage'"
      :task="task"
      @changePage="changePage"
      @editTaskData='editTaskData'
    ></EditComponent>

  </div>
</template>

<script>
// Import components
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import AddComponent from './components/AddComponent'
import EditComponent from './components/EditComponent'

const deployURL = 'https://desolate-inlet-84582.herokuapp.com/'
// Axios
import axios from 'axios'

export default {
  name: 'App',
  components: {
    LoginPage,
    RegisterPage,
    HomePage,
    AddComponent,
    EditComponent
  },
  data() {
    return {
      pageName: 'loginPage',
      addCategory: '',
      categories: [
        {
          id: 1,
          name: 'Backlog'
        },
        {
          id: 2,
          name: 'Todo'
        },
        {
          id: 3,
          name: 'Doing'
        },
        {
          id: 4,
          name: 'Done'
        },
      ],
      tasks: [],
      task: {}
    }
  },
  methods: {
    backHome(){
      this.pageName = 'homePage'
    },
    checkToken() {
      if(!localStorage.getItem('access_token')) {
        this.pageName = 'loginPage'
      } else {
        this.fetchAllTask()
        this.pageName = 'homePage'
      }
    },
    changePage(payload) {
      if(payload.addCategory) {
        this.addCategory = payload.addCategory
      }
      this.pageName = payload.pageName

    },
    editChangePage(payload){
      this.pageName = payload.pageName
      this.editTask = payload.tasks
    },
    createTask(payload) {
      const access_token = localStorage.getItem('access_token')
      axios({
        url: deployURL + 'tasks',
        headers: {access_token},
        method: 'POST',
        data: payload
      })

      .then(res => {
        this.fetchAllTask()
        this.pageName = 'homePage'
      })
      .catch(err => {
        console.log(err);
      })
    },
    login(payload) {
      axios({
        url: deployURL + 'login',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.fetchAllTask()
          this.pageName = 'homePage'
        })
        .catch(err => {
          console.log(err);
        })
    },
    fetchAllTask() {
      const access_token = localStorage.getItem('access_token')
      axios({
        url: deployURL + 'tasks',
        method: 'GET',
        headers: { access_token }
      })
        .then(({ data }) => {
          console.log(data);
          this.tasks = data
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteTask(id){
      const access_token = localStorage.getItem('access_token')
      axios({
        url: deployURL + `tasks/${id}`,
        method: 'DELETE',
        headers: {access_token},
      })
      .then(data => {
        this.fetchAllTask()
        this.pageName = 'homePage'
      })
      .catch(err => {
        console.log(err);
      })
    },
    moveTask(payload){
      const access_token = localStorage.getItem('access_token')
      axios({
        url: deployURL + `tasks/${payload.id}`,
        method: 'PATCH',
        headers: {access_token},
        data: {
          category: payload.category
        }
      })
      .then(data => {
        this.fetchAllTask()
      })
      .catch(err => {
        console.log(err);
      })
    },
    editTask(payload){
      this.task = payload
      this.pageName = 'editPage'
    },
    editTaskData(payload){
      console.log(payload, 'Data is edited');
      const access_token = localStorage.getItem('access_token')
      axios({
        url: deployURL + `tasks/${payload.id}`,
        method:  `PUT`,
        headers: {access_token},
        data: {
          title: payload.title,
          description: payload.description,
          deadline: payload.deadline
        }
      })
      .then(data =>{
        this.fetchAllTask()
        this.pageName = 'homePage'
      })
      .catch(err =>{
        console.log(err);
      })
    },
    logout(){
      this.pageName = 'loginPage'
      localStorage.removeItem('access_token')
    },
    onSuccess(payload){
      axios({
        url: deployURL + 'googleLogin',
        method: "POST",
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.fetchAllTask()
          this.pageName = 'homePage'
        })
        .catch(err => {
          console.log(err);
        
        
      })
    }
  },
  created() {
    this.checkToken()
  }
}
</script>

<style scoped>

</style>