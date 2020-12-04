<template>
  <div>
      <Navbar 
      @logout='logout'
      @addPage='addPage'
      ></Navbar>
      <div class="container mt-4">
        <div class="row">
            <div class="col-md-3 col-sm-6 mt-3" v-for="category in categories" :key="category.id">
                <div class="p-3 bg-primary text-white rounded">
                    {{ category.name }}
                </div>
                <div class="card mt-3 shadow" v-for="data in filterTask(category.name)" :key="data.id">
                    <TaskList 
                    @edit='edit'
                    @deleteId='deleteId'
                    :listData='data'
                    @patchLeft='patchLeft'
                    @patchRight='patchRight'></TaskList>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar"
import TaskList from "./taskList"
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
        filterTask(category){
            // console.log(category)
            // console.log(listTask)
            return this.listTask.filter(task => task.category == category)
        },
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
        TaskList
    },
    created: function(){
        this.fetch()
    }
}
</script>

<style>

</style>