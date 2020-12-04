<template>
    <!-- <div class="card mt-3 shadow" v-for="task in taskFilter(category.name)" :key="task.id"> -->
        <div class="card-body">
            <h5 class="card-title">{{taskList.title}}</h5>
            <p class="card-text">{{taskList.description}}</p>
            <!-- <button @click.prevent="toAddPage" class="btn btn-light btn-sm font-weight-bold">Add</button> -->
            <button @click="toEdit" class="btn btn-light btn-sm font-weight-bold">Edit</button>
            <button @click="toDelete" class="btn btn-light btn-sm font-weight-bold">Delete</button>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: "KanbanList",
    data() {
        return {

        }
    },
    props: ["taskList"],
    methods: {
        toEdit() {
            this.$emit("toEditTask", this.taskList.id)
        },
        toDelete() {
            this.$emit('deleteTask', this.taskList.id)
        }
    }

}
</script>

<style>

</style>