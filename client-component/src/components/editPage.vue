<template>
  <div class="container">
        <div id="edit-page" class="bg-light col mt-5 rounded">
            <form id="edit-form" class="input-margin" @submit.prevent="taskEditted">
                <h1>Edit Form</h1>
                <div class="form-group" >
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" id="edit-title" placeholder="title" v-model="editTask.title">
                </div>
                <div class="form-group">
                    <label for="edit-category">Category</label>
                    <select class="form-control" id="edit-category" v-model="editTask.category">
                      <option selected disabled>Select Category</option>
                      <option value="Backlog">Backlog</option>
                      <option value="Todo">Todo</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-description">Description</label>
                    <textarea class="form-control" id="edit-desc" placeholder="description" v-model="editTask.desc"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'editPage',
    data () {
        return {
            editted: this.editTask
        }
    },
    methods: {
        taskEditted(){
            console.log(this.editted)
            axios({
                url: `http://localhost:3000/tasks/${this.editted.id}`,
                method: 'put',
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: this.editted
            })
            .then(response=>{
                console.log(response)
                this.$emit('changeCurrentPage', 'main')
            })
            .catch(e=>{
                console.log(e)
            })
        }
    },
    props: ['editTask']
}
</script>

<style>

</style>