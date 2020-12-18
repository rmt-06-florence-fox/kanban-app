<template>
    <div id="edit-task">
        <navbar @movetomain="movetomain" @movetoadd="movetoadd"> </navbar>
        <h2> Edit Task </h2>
        <form id="f-edit" @submit.prevent="edit">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="e-title" placeholder="Enter title" name="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="category">Category:</label>
                <select class="form-control" name="category" id="e-category" v-model="category">
                    <option value="Backlog">Backlog</option>
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select> 
            </div>
            <button type="submit" class="btn btn-primary"> Edit Task </button>           
        </form>
    </div>
</template>

<script>
import axios from "axios"
import navbar from './navbar.vue'
export default {
    name : 'editPage',
    props: ['data'],
    data(){
        return {
            title : '',
            category : '',
            id: ''
        }
    }, 
    methods : {
        edit(){
            axios({
                method : 'put',
                url :`https://kanbanappmarcella.herokuapp.com/task/` + this.id,
                data : {
                    title : this.title,
                    category : this.category
                },
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(({data}) => {
                this.$emit('movetomain', 'main page')
            })
            .catch(err => {
                console.log(err);
            })
        },
        movetomain(){
            this.$emit('movetomain', 'main page')
        },
        movetoadd(){
            this.$emit('movetoadd', 'add task page')
        }
    },
    created () {
        this.title = this.data.title
        this.category = this.data.category
        this.id = this.data.id
    }
}
</script>

<style>

</style>