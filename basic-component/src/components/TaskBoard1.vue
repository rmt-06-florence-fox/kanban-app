<template>
    <div class="p-3 rounded" id="form-card-1">
        <div class="p-2 mb-2 bg-success text-white rounded shadow">
            {{Category.name}}
        </div> 
        <TaskCard 
        v-for="Task in Task"
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
    props: ['Task', 'Category'],
    components: {
        TaskCard
    }
}
</script>

<style>

</style>