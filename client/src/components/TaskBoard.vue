<template>
    <div class="col-lg-3 col-md-6 col-sm-6 mt-2 pt-3 rounded">
        <div class="card-header bg-danger text-white text-center">{{category}}</div>
            <TaskItem
                v-for="task in dataTask"
                :key="task.id"
                :task="task"
                :category="category"
                @updateTask="updateTask"
                @deleteTask="deleteTask"
            ></TaskItem>
    </div>
</template>

<script>
import TaskItem from "./TaskItem"
export default {
    name: 'TaskBoard',
    data() {
        return {
            name: "Task Board"
        }
    },
    methods: {
        updateTask(title, category, id) {
            this.$emit('updateTask', title, category, id)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        }
    },
    components: {
        TaskItem
    },
    props: ['dataTask', 'category'],
}
</script>

<style>

</style>