<template>
    <div class="card">
        <div class="card-body" v-if="item === task.category">
            <h5 class="card-title">{{task.title}}</h5>
            <p class="card-text">{{task.User.email}}</p>
            <a @click.prevent="toEditPage(task.id)" class="btn btn-primary">Edit</a>
            <a @click.prevent="deleteTask(task.id)" class="btn btn-primary">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["task", "item"],
    methods: {
        deleteTask(id) {
            // console.log(id)
            this.$emit("DeleteTask", id)
        },
        toEditPage(id) {
            // console.log(id, "Halloooo")
            this.$emit("ToEditPage", "Edit Form", id)
        }
    }
}
</script>

<style>

</style>