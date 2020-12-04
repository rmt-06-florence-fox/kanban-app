<template>
    <div>
        <div
        class="list-group-item"
        >              
            <!-- //capitalize  -->
            <h6>
                {{ task.title }}
            </h6>
            <!-- //button -->
            <button class="btn btn-outline-info" type="submit" @click="updateForm" >Edit</button>
            <button class="btn btn-outline-danger" type="submit" @click="deleteTask" >Delete</button>

        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    data() {
        return {
            taskId: ""
        }
    },
     methods: {
        updateForm() {
            // console.log(this.task);
            this.$emit('changePage', 'update')
            this.$emit('editTask', this.task)
        },
        deleteTask() {
            this.$emit('deleteTask', this.taskId)
        }
    },
    props: ['task'],
    created() {
        this.taskId = this.task.id
    }
}
</script>

<style>

</style>