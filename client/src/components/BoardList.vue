<template>
    <div class="container-category container-fluid">
        <div class="row row-category">
            <div v-for="(category, index) in categories" :key="index" class="col-sm-3">
                <TaskBoard :tasks="tasks" :category="category" @addKanban="addKanban" @editKanban="editKanban" @deleteKanban="deleteKanban"></TaskBoard>
            </div>
        </div>
    </div>
</template>

<script>
import TaskBoard from "./TaskBoard"

export default {
    name: "BoardList",
    props: [ 'tasks', 'categories' ],
    components: {
        TaskBoard
    },
    methods: {
        addKanban(page, id) {
            this.$emit("addKanban", page, id)
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