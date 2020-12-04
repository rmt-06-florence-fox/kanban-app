<template>
    <div>
        <div class="container mt-5">
            <button @click="formAdd" type="button" class="btn btn-dark btn-block">Add Task</button>
        </div>
        <div class="container mt-4">
            <div class="row">
                <KanbanBoard v-for="category in categories" 
                    :key="category.id" 
                    :category="category"
                    :tasks="tasks"
                    @edit="edit"
                    @cancel="cancel"
                    @deleteData="deleteData"
                >
                </KanbanBoard>
            </div>
        </div>
    </div>
</template>

<script>
import KanbanBoard from "./KanbanBoard"

export default {
    name: "KanbanPage",
    data() {
        return {
            categories: [
                {
                    "id": 1,
                    "name": "Backlog"
                },
                {
                    "id": 2,
                    "name": "Todo"
                },
                {
                    "id": 3,
                    "name": "Doing"
                },
                {
                    "id": 4,
                    "name": "Done"
                }
            ]
        };
    },
    methods: {
        edit(objEdit) {
            this.$emit("edit", objEdit)
            // console.log(objEdit, "ini dari edit")
        },
        cancel() {
            this.$emit("cancel")
        },
        formAdd() {
            // console.log("-----")
            this.$emit("changePage", "form-add")
        },
        deleteData(id) {
            this.$emit("deleteData", id)
        }
    },
    props: ["tasks"],
    components: {
        KanbanBoard
    }
}
</script>

<style>

</style>