<template>
    <div>
        <div class="ml-3 mb-3 category bg-secondary ">
            <div class="header p-2">
                <span>{{cardTitle}}</span>
            </div>
            <div class="content p-2">
                <CategoryList
                    v-for="task in listTask" :key="task.id" :task="task" :category="category" @refresh="refresh"
                ></CategoryList>
                <textarea v-if="addForm"
                            placeholder="Enter task" 
                            class="list-card-composer-textarea js-card-title form-control" 
                            style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 80px;" v-model="title"></textarea>
            </div>
            <div class="footer p-2 ">
                <div v-if="!addForm" >
                    <a class="btn btn-outline-success" @click="toAddForm">Add Task</a>
                </div>
                <div v-else>
                    <button class="btn btn-success" @click="addTask">Add Task</button>
                    <button class="btn btn-danger" @click="cancelAddForm">Cancel</button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import CategoryList from './categoryList'
import Axios from 'axios'
import swal from 'sweetalert'

export default {
    name: "Category",
    data() {
        return {
            baseUrl: "https://kanban-adnkamil.herokuapp.com",
            cardTitle: '',
            addForm: false,
            title: ''
        }
    },
    components: {
        CategoryList,
        // AddTask
    },
    props: [ 'tasks', 'category' ],
    computed: {
        listTask() {
            const list = []
            this.tasks.forEach(el => {
                if (el.category === this.category) {
                    list.push(el)
                } 
            });
            return list
        }
    },
    methods: {
        refresh() {
            this.$emit('refresh')
        },
        toAddForm() {
            this.addForm = true
        },
        cancelAddForm() {
            this.addForm = false
        },
        addTask() {
            let title = this.title
            let category = this.category
            // console.log(title)
            // console.log(category)
            Axios({
                method: 'post',
                url: this.baseUrl + '/tasks',
                headers: {
                    accesstoken: localStorage.accesstoken 
                },
                data: {title, category}
            })
                .then(res => {
                    this.title = ''
                    this.addForm = false
                    this.$emit('refresh')
                    swal('Ooyeahhh', 'Task added', 'success', {
                        timer:1500,
                        button: false
                        })
                })
                .catch(err => console.log(err))
        }   
    },
    created() {
        (this.category === 'backlog') ? this.cardTitle = 'Back Log'
        : (this.category === 'todo') ? this.cardTitle = 'Todo'
        : (this.category === 'done') ? this.cardTitle = 'Done'
        : this.cardTitle = 'Completed'
    }
}
</script>

<style>

</style>