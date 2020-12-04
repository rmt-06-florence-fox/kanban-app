<template>
  <div>
      <LoginPage 
        v-if="currentPage == 'login'" 
        @changeCurrentPage="changePage"
      ></LoginPage>
      <RegisterPage 
        v-else-if="currentPage == 'register'" 
        @changeCurrentPage="changePage"
      ></RegisterPage>
      <MainPage 
        v-else-if="currentPage == 'main'" 
        @changeCurrentPage="changePage"
        @edit='edit'
      ></MainPage>
      <AddPage 
        v-else-if="currentPage == 'add'"
        @changeCurrentPage="changePage"
      ></AddPage>
      <EditPage 
        v-else-if="currentPage == 'editPage'"
        :editTask='filter'
        @changeCurrentPage="changePage"
      ></EditPage>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import MainPage from "./components/MainPage"
import AddPage from "./components/addPage"
import EditPage from "./components/editPage"
import axios from "axios"
export default {
    name: "app",
    data () {
        return {
            name: "robby",
            currentPage: "login",
            filter: []
        }
    },
    methods: {
        changePage (page) {
            this.currentPage = page
        },
        edit(data){
            // console.log(data)
            axios({
                url: `http://localhost:3000/tasks/${data}`,
                method: 'get',
                headers:{
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response=>{
                // console.log(response.data)
                this.filter = response.data
                console.log(this.filter)
                this.currentPage = 'editPage'
                // this.pageName = 'Edit Page'
            })
            .catch(e=>{
                console.log(e)
            })
        },
    },
    components:{
        LoginPage,
        RegisterPage,
        MainPage,
        AddPage,
        EditPage
    },
    created: function(){
        if (localStorage.getItem('access_token')){
            this.currentPage = 'main'
            // this.fetch()
        } else {
            this.currentPage = 'login'
        }
    }
    
}
</script>

<style>

</style>