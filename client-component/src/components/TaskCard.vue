<template>
    <div class="card-body">
        <h4 class="card-title">{{ task.title }}</h4>
        <p class="card-text">{{ task.category }}</p>
        <button class="btn btn-primary" onclick="editTask(${task.id})">Edit</button>
        <button class="btn btn-primary" onclick="deleteTask(${task.id})">Delete</button>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    props: ['task']
}
</script>

<style>

</style>