<template>
  <div class="container">
        <div id="add-page" class="bg-light col mt-5 rounded">
            <form id="add-form" class="input-margin" @submit.prevent="add">
                <h1>Add Form</h1>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" id="add-title" placeholder="title" v-model="addTask.title">
                </div>
                <div class="form-group">
                    <label for="add-category">Category</label>
                    <select class="form-control" id="add-category" v-model="addTask.category">
                      <option selected disabled>Select Category</option>
                      <option value="Backlog">Backlog</option>
                      <option value="Todo">Todo</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="add-description">Description</label>
                    <textarea class="form-control" id="add-desc" placeholder="description" v-model="addTask.desc"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "addPage",
    data () {
        return{
            addTask: {
                title: '',
                category: '',
                desc: '',
            }
        }
    },
    methods:{
        add(){
            axios({
                url: 'https://robby-kanban.herokuapp.com/tasks/',
                method: 'post',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: this.addTask
            })
            .then(response=>{
                console.log(response)
                this.$emit('changeCurrentPage', 'main')
            })
            .catch(e=>{
                console.log(e)
            })
            .finally(_ =>{
                this.addTask.title = '',
                this.addTask.category = '',
                this.addTask.desc = ''
            })
        }
    }
}
</script>

<style>

</style>