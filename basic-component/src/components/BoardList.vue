<template>
    <div id="main-page">
        <h1 style="text-align: center; ">List Activity :)</h1>
        <div class="d-flex justify-content-around text-center mt-4">   
            <TaskBoard1 
            v-for="Category in Category"
            :key="Category.id"
            :Task="Task"
            :Category="Category"
            :fetch="fetch"
            @PleaseAddTask="addTask"
            @PleaseEditCategory="back"
            @PleaseEditCategory="done"
            @PleaseDeleteTask="destroy"
            ></TaskBoard1>
        </div>    
    </div>
</template>

<script>
import axios from "axios"
import TaskBoard1 from "./TaskBoard1"



export default {
    name: "BoardList",
    props: ['Task', 'Category', 'fetch'],
    components: {
        TaskBoard1,
        
    },
    methods: {
        back(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        done(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        destroy(id){
            this.$emit("PleaseDeleteTask", id)
        },
        addTask(){
            this.$emit("PleaseAddTask")
        }
    },
    created(){
        this.fetch
    }
}
</script>


<style>

</style>