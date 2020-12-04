<template>
    <div class="card">
        <div class="card-body">
            <!-- <h1>Hello</h1> -->
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.User.email}}</p>
            <a @click="editPage(backlog)" class="btn btn-primary">Edit</a>
            <a @click="deleteTask(backlog.id)" class="btn btn-primary">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["backlog"],
    methods: {
        deleteTask(id) {
            // console.log(id)
            this.$emit("DeleteTask", id)
        },
        editPage(task) {
            // console.log("EditTask", task)
            this.$emit("EditTask", task)
        }
    }
}
</script>

<style>

</style>