<template>
<div>
        <!-- {{ categories }} -->
        <!-- {{task.id === id}} -->
    <div v-if="!editMode" class="card mt-2" >
        <div class="card-body">
            <h5 class="card-title">{{task.title}}</h5>
            <a @click="formEdit(task)" href="#" class="card-link">Edit</a>
            <a @click="deleteData(task.id)" href="#" class="card-link">Delete</a>
        </div>
    </div>
    <div v-else>
        <!-- {{task}} -->
        <div class="container">
            <!-- <form @submit.prevent="editTask({{task.id}})"><br><br><br> -->
                <!-- {{categories[0].name}} -->
            <form @submit.prevent="editTask(task.id)">
                <!-- {{ dataEdit }} -->
                <h3>Edit Task</h3>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="dataEdit.title" type="title" class="form-control" id="title">    
                </div>
                <div class="form-group">
                    <label for="category">Choose a Category :</label>
                    <select class="form-control" v-model="dataCategory">
                        <option disabled value ="" selected>Please select one</option>
                        <option value="backlog">Backlog</option>
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                    <button type="submit" class="btn btn-primary btn-block">Save</button>
            </form>
            <button @click.prevent="cancelButton" class="mt-2 btn btn-warning btn-block">Cancel</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "KanbanItem",
    data() {
        return {
            dataEdit: null,
            editMode: false,
            selected: "",
            title: "",
            dataCategory: ""
        }
    },
    props: [ "task", "category" ],
    methods: {  
        editTask(id){
            let objEdit = {
                id,
                category: this.dataCategory,
                title: this.dataEdit.title
            }
            this.$emit("edit", objEdit)
        },
        formEdit(value) {
            this.editMode = true
            this.dataEdit = value
        },
        cancelButton() {
            this.editMode = false
            this.dataEdit = null
        },
        deleteData(id) {
            // console.log(id)
            this.$emit("deletData", id)
        }
    }
}
</script>

<style>

</style>