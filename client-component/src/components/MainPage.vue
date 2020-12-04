<template>
  <div>
      <Navbar 
        @logout='logout'
        @addPage='addPage'
      ></Navbar>
      <div class="container mt-4">
        <div class="row">
            <TaskBoard  
                v-for="category in categories" :key="category.id"
                :category='category'
                :listTask='listTask'
                @edit='edit'
                @deleteId='deleteId'
                @patchLeft='patchLeft'
                @patchRight='patchRight'
            ></TaskBoard>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar"
import TaskBoard from "./TaskBoard"
import axios from "axios"
export default {
    name: "MainPage",
    data () {
        return {
            currentPage: "main",
            categories:[
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
                }
            ],
            listTask: []
        }
    },
    methods: {
        logout(){
            // console.log('masuk sini')
            // console.log(gapi)
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                localStorage.removeItem('access_token')
                console.log('User signed out.');
                this.$emit('changeCurrentPage', 'login')
                console.log(this)
            });
            
        },
        addPage(){
            this.$emit('changeCurrentPage', 'add')
        },
        fetch(){
            axios({
                url: 'http://localhost:3000/tasks',
                method: 'get',
                headers:{
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response=>{
                // console.log(response.data)
                // response.data.forEach((task)=>{
                //     this.listTask.push(task)
                // })
                // console.log(response.data)
                this.listTask = response.data
                // console.log(this.listTask)
            })
            .catch(e=>{
                console.log(e)
            })
        },
        edit(data){
            this.$emit('edit', data)
        },
        deleteId(data){
            axios({
                url: `http://localhost:3000/tasks/${data}`,
                method: 'delete',
                headers:{
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(response=>{
                this.fetch()
            })
            .catch(e=>{
                console.log(e)
            })
        },
        patchLeft(data){
            let editCategory
            if(data.category == 'Done'){
                editCategory = 'Doing'
            } else if (data.category == 'Doing'){
                editCategory = 'Todo'
            } else {
                editCategory = 'Backlog'
            }
            // console.log(editCategory)
            axios({
                url: `http://localhost:3000/tasks/${data.id}`,
                method: 'patch',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    category: editCategory
                }
            })
            .then(response=>{
                // console.log(response)
                // console.log(editCategory)
                this.fetch()
            })
            .catch(e=>{
                console.log(e)
            })
        },
        patchRight(data){
            console.log('patch right')
            let editCategory
            if(data.category == 'Backlog'){
                editCategory = 'Todo'
            } else if (data.category == 'Todo'){
                editCategory = 'Doing'
            } else {
                editCategory = 'Done'
            }
            console.log(editCategory)
            axios({
                url: `http://localhost:3000/tasks/${data.id}`,
                method: 'patch',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    category: editCategory
                }
            })
            .then(response=>{
                // console.log(response)
                // console.log(editCategory)
                this.fetch()
            })
            .catch(e=>{
                console.log(e)
            })
        }
    },
    components:{
        Navbar,
        TaskBoard
    },
    created: function(){
        this.fetch()
    }
}
</script>

<style>

</style>