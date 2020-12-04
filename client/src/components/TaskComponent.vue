<template>
    <div class="task-container rounded">
        <div class="head text-white text-center rounded">
            {{category.name}}
        </div>
        <button type="button" @click="showAddForm(category.id)" class="btn btn-info btn-block">Add New Task</button>
        <div class = "taskList scroll rounded">
            <AddTaskForm 
            v-if="showingAddForm == category.id" 
            :CategoryId="category.id"
            @add="add"    
            ></AddTaskForm>
            <div class="card mt-1 mb-3" v-for="(Tasks, index) in category.Tasks" :key="Tasks.id">
                <EditTaskForm  
                    v-if="showingEditForm === Tasks.id"
                    :DefEditTitle="Tasks.title"
                    :DefEditDescription="Tasks.description"
                    :TaskId="showingEditForm"
                    @editTask="editTask"
                >
                </EditTaskForm>
                <div class="card-body" v-else>
                    <small>Created by: {{(category.Tasks[index].User.email).split('@')[0]}}</small>
                    <h5 class="card-title">{{Tasks.title}}</h5>
                    <p class="card-text">{{Tasks.description}}</p>
                </div>
                <button 
                    type="button" @click="showEditForm(Tasks.id, Tasks.title, Tasks.description)" 
                    class="btn btn-primary"
                    v-if="showingEditForm === Tasks.id"
                >Cancel
                </button>
                <button 
                    type="button" @click="showEditForm(Tasks.id, Tasks.title, Tasks.description)" 
                    class="btn btn-primary"
                    v-else
                >Edit
                </button>
                <button type="button" @click="removeTask(Tasks.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";

import Swal from "sweetalert2";

export default {
    name: "TaskComp",
    props: ["category"],
    data(){
        return{
            showingAddForm: null,
            showingEditForm: null
        }
    },
    methods: {
        showAddForm(id){
            if(id === this.showingAddForm){
                this.showingAddForm = null;
            } else if (this.showingEditForm != null){
                this.showingEditForm = null;
                this.showingAddForm = id
            } else {
                this.showingAddForm = id
            }
        },
        showEditForm(id){
            if(id === this.showingEditForm){
                this.showingEditForm = null;
            }else if (this.showingAddForm != null){
                this.showingAddForm = null;
                this.showingEditForm = id;
            } else {
                this.showingEditForm = id;
            }
        },
        add(payload){
            this.$emit("add", payload);
        },
        editTask(payload){
            // console.log(payload);
            this.showEditForm(null);
            this.$emit("editTask", payload);
        },
        removeTask(id){
            Swal.fire({
                icon: 'warning',
                title: 'Are You Sure Want To Delete This Task?',
                text: 'Deleted Task will gone forever... forever... foreverr..... FOREEVVEERRR!!!',
                showCancelButton: true,
                cancelButtonColor: '#007bff',
                showCloseButton: true,
                confirmButtonColor: '#dc3545'
            })
            .then((result)=>{
                if(result.isConfirmed){
                    const idToRemove = Number(id)
                    this.$emit("removeTask", idToRemove);
                }
            })
        }
    }, 
    components: {
        AddTaskForm,
        EditTaskForm
    }
}
</script>

<style>

</style>