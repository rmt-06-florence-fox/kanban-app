<template>
  <div class="container-fluid">
        <div class="row">
            <TaskBoard 
                :dataTask="dataTask"
                v-for="(category, idx) in categories"
                :key="idx"
                :category="category"
                @updateTask="updateTask"
                @deleteTask="deleteTask"
            ></TaskBoard>
        </div>
    </div>
</template>

<script>
import TaskBoard from "./TaskBoard"
export default {
    name: "BoardList",
    props: ['dataTask'],
    data() {
        return{
            name: "Board List",
            categories: [
                "Back-Log",
                "To-Do",
                "Doing",
                "Done"
            ]
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
        TaskBoard
    }
}
</script>

<style>

</style>