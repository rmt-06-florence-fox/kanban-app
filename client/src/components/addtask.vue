<template>
<div id="add-task" class="container">
    <navbar @movetomain="movetomain" @movetoadd="movetoadd"> </navbar>
    <h2> Add Task </h2>
    <form @submit.prevent="add">
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" class="form-control" id="title" placeholder="Enter title" name="title" v-model="title">
        </div>
        <div class="form-group">
            <label for="category" id="category">Category:</label>
            <select class="form-control" name="category" v-model="category">
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select> 
        </div>
        <button type="submit" class="btn btn-primary"> Add Task </button>           
    </form>
</div>
</template>

<script>
import axios from "axios"
import navbar from './navbar.vue'
export default {
    name : 'addTask',
    data(){
        return{
            title : '',
            category : ''
        }
    },
    methods : {
        add(){
            axios({
                method : 'post',
                url :`https://kanbanappmarcella.herokuapp.com/task`,
                headers : {
                    access_token : localStorage.getItem('access_token')
                },
                data : {
                    title : this.title,
                    category : this.category
                }
            })
            .then(data => {
                this.$emit('movetomain','main page')
            })
            .catch(err => {
                console.log(err)
            })
        },
        movetomain(){
            this.$emit('movetomain', 'main page')
        },
        movetoadd(){
            this.$emit('movetoadd', 'add task page')
        }
    }
}
</script>

<style>

</style>