<template>
    <div id="edit-task">
        <h2> Edit Task </h2>
        <form id="f-edit" @submit.prevent="edit">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="e-title" placeholder="Enter title" name="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="category">Category:</label>
                <select class="form-control" name="category" id="e-category" v-model="category">
                    <option value="backlog">Backlog</option>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select> 
            </div>
            <button type="submit" class="btn btn-primary"> Edit Task </button>           
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name : 'editPage',
    data(){
        return {
            title : '',
            category : ''
            }
    }, 
    methods : {
        getEdit(id){
            axios({
                method : 'get',
                url : `http://localhost:3000/task/` + id,
            })
        },
        edit(id){
            axios({
                method : 'post',
                url :`http://localhost:3000/task/` + id,
                data : {
                    title : this.title,
                    category : this.category
                }
            })
            .then(data => {
                console.log(data);
                this.$emit('movetomain', 'main page')
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>