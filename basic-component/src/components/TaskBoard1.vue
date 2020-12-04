<template>
    <div class="p-3 rounded" id="form-card-1">
        <div class="p-2 mb-2 bg-success text-white rounded shadow">
            {{Category.name}}
        </div> 
        <TaskCard 
        v-for="Task in filteredTask"
        :key="Task.id"
        :Task="Task"
        :Category="Category.name"
        ></TaskCard>
    </div>
</template>

<script>
import TaskCard from "./taskCard"

export default {
    name:  "TaskBoard1",
    data() {
        return {
            tasks: []
        }
    },
    props: ['Task', 'Category'],
    computed: {
        filteredTask(){
            return this.tasks.filter(task => task.category === this.Category.name)
        }
    },
    components: {
        TaskCard
    },
    created(){
        console.log(this.tasks)
        this.tasks = this.Task
    }
    
}
</script>

<style>

</style>