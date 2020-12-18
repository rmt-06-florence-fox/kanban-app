<template>
  <div>
        <div class="content-list mb-1 p-2 bg-dark">
            <div class="content-header">
                <div v-if="!goToEditTask">{{task.title}}</div>
                <div v-else>
                    <textarea 
                            placeholder="Enter task" 
                            class="list-card-composer-textarea js-card-title form-control" 
                            style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 80px;" v-model="title"></textarea>
                    <select id="category" v-model="newCategory" class="custom-select custom-select-sm">
                        <!-- <option v-for="valueCategory in categories" :value={{valueCategory}}>{{valueCategory}}</option> -->
                        <option value="backlog">Back Log</option>
                        <option value="todo">Todo</option>
                        <option value="done">Done</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button class="btn btn-success" @click="editTask">Edit</button>
                    <button class="btn btn-danger" @click="cancelEditForm">Cancel</button>
                </div>
            </div>
            <div class="content-footer ">
                <div class='action'>
                    <div>
                        <div class="sender">by {{task.User.email}}</div>
                        <div class="date">{{new Date(this.task.createdAt).toDateString()}}, {{new Date(this.task.createdAt).getHours()}} : {{new Date(this.task.createdAt).getMinutes()}}</div>
                    </div>
                    <div v-if="!goToEditTask">
                        <a href="#" class="btn btn-outline-primary btn-sm " @click="formEditTask">Edit</a>
                        <a href="#" class="btn btn-outline-danger btn-sm" @click="deleteTask" >Delete</a>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: 'CategoryList',
    data() {
        return {
            newCategory: this.category,
            title: this.task.title,
            goToEditTask: false,
            confirmDelete: false,
            baseUrl: 'https://kanban-adnkamil.herokuapp.com/tasks/',
            categories: ['backlog', 'todo', 'done', 'completed']
        }
    },
    props: ['task', 'category'],
    methods: {
        deleteTaskConfirm() {
            this.confirmDelete = true
        },
        formEditTask() {
            let id = this.task.id
            axios({
                method: 'get',
                url: this.baseUrl + id,
                headers: {
                    accesstoken: localStorage.accesstoken
                }
            })
            .then(_ => {
                this.goToEditTask = true
            })
            .catch(err => {
                swal('Ooppss!!', `You don't have access`, 'error')
            })
        },
        cancelEditForm() {
            this.goToEditTask = false
        },
        editTask() {
            let title = this.title
            let id = this.task.id
            let category = this.newCategory
            
            axios({
                method: 'put',
                url: this.baseUrl + id,
                headers: {
                    accesstoken: localStorage.accesstoken 
                },
                data: {title, category}
            })
            .then(res => {
                this.goToEditTask = false
                this.$emit('refresh')
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask() {
            let id = this.task.id
            axios({
                method: 'get',
                url: this.baseUrl + id,
                headers: {
                    accesstoken: localStorage.accesstoken
                }
            })
            .then(res => {
                swal({
                    title: 'Are you sure ??',
                    text: `Once deleted, you will not be able to recover this task!`,
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true
    
                })
                .then(willDel => {
                    if(willDel) {
                        axios({
                            method: 'delete',
                            url: this.baseUrl + id,
                            headers: {
                                accesstoken: localStorage.accesstoken 
                            },
                        })
                        .then(res => {
                            this.$emit('refresh')
                        })
                    }
                })
            })
            .catch(err => {
                swal('Ooppss!!', `You don't have access`, 'error')
            })
        }
    }
}
</script>

<style>

</style>