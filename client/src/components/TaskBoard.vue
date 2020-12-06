<template>
    <div>
        <div class="bg-warning text-white title-category">
            <h6 class="pointer"><a @click.prevent="addKanban(category)" href="">{{category.name}}</a></h6>
        </div>
        <div v-for="(task, index) in tasks" :key="index" class="category">
        <TaskItem :task="task" :category="category" @editKanban="editKanban" @deleteKanban="deleteKanban"></TaskItem>
        </div>
    </div>
</template>

<script>
import TaskItem from "./TaskItem"

export default {
    name: "TaskBoard",
    props: [ 'tasks', 'category' ],
    components: {
        TaskItem
    },
    methods: {
        addKanban(category) {
            this.$emit("addKanban", "Add Kanban Page", category.id)
        },
        editKanban(page, task) {
            this.$emit("editKanban", page, task)
        },
        deleteKanban(id) {
            this.$emit("deleteKanban", id)
        }
    }
}
</script>

<style>

</style>