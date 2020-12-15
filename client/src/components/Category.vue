<template>
    <div id="taskCategory" class="container main">
        <div class="row">

            <div class="col" v-for="category in categories" :key="category.id">
                <div class="card bg-light mb-3" style="max-width: 15rem;">
                    <div class="card-header" style="display: flex; justify-content: space-between;">
                        {{category}}
                        <button @click="addCategory(category)" type="button" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-plus-square-o" style="font-size:15px"></i></button>    
                    </div>

                    <div class="card-body" style="height: 100vh; overflow-y: auto; background-color: #f8c291;">
                        <div v-for="task in tasks" :key="task.id">
                            
                            <div class="card" style="width: 12rem; margin-bottom: 5%; background-color: #F8EFBA;" v-if="category == task.category">
                                <div class="card-body">
                                    <h4 class="card-title">{{task.title}}</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">by {{task.User.email}}</h6>

                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button v-if="category == 'Todo'" @click="moveNext({ category: 'Backlog', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-primary"><i class="fa fa-arrow-circle-left" style="font-size:20px"></i></button>
                                        <button v-if="category == 'Doing'" @click="moveNext({ category: 'Todo', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-primary"><i class="fa fa-arrow-circle-left" style="font-size:20px"></i></button>
                                        <button v-if="category == 'Done'" @click="moveNext({ category: 'Doing', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-primary"><i class="fa fa-arrow-circle-left" style="font-size:20px"></i></button>

                                        <button @click="deleteTask(task.id)" type="button" class="btn-group btn-group-sm btn-outline-danger"><i class="fa fa-trash-o" style="font-size:20px"></i></button>

                                        <button v-if="category == 'Backlog'" @click="moveNext({ category: 'Todo', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-success"><i class="fa fa-arrow-circle-right" style="font-size:20px"></i></button>
                                        <button v-if="category == 'Todo'" @click="moveNext({ category: 'Doing', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-success"><i class="fa fa-arrow-circle-right" style="font-size:20px"></i></button>
                                        <button v-if="category == 'Doing'" @click="moveNext({ category: 'Done', id: task.id })" type="button" class="btn-group btn-group-sm btn-outline-success"><i class="fa fa-arrow-circle-right" style="font-size:20px"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AddTask 
            :categoryName= "categoryName"
            @addTask="addTask"
        ></AddTask>
    </div>
</template>

<script>
import AddTask from './AddTask'

export default {
    name: "Category",
    props: ["tasks", "categories"],
    data() {
        return {
            categoryName: ""
        }
    },
    components: {
        AddTask
    },
    methods: {
        deleteTask(id) {    
            this.$emit("deleteTask", id)
        },
        addCategory(category) {
            this.categoryName = category
        },
        addTask(payload) {
            const payload2 = {
                title: payload.title,
                category: this.categoryName
            }
            this.$emit("addTask", payload2)
            this.title=""
            $('#exampleModal').modal('hide');
        },
        moveNext(data) {
            this.$emit("moveNext", data)
        }
    },
}
</script>

<style>
    #taskCategory {
        font-family: 'Permanent Marker', cursive;
    }
</style>