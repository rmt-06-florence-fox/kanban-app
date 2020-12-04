<template>
    <div class="card">
        <div class="card-body">
            <!-- <h1>Hello</h1> -->
            <h5 class="card-title">{{task.title}}</h5>
            <p class="card-text">{{task.User.email}}</p>
            <a @click="editPage(task)" class="btn btn-primary">Edit</a>
            <a @click="deleteTask(task.id)" class="btn btn-primary">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["task"]
}
</script>

<style>

</style>