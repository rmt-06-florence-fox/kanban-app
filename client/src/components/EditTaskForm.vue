<template>
    <div class="card-body form-card rounded">
        <form @submit.prevent="editTask">
            <div class="form-group">
                <input type="text" class="form-control" id="taskTitle" v-model="title" required>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="taskDescription" v-model="description" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Confirm Edit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "EditTaskForm",
    data(){
        return {
            title: '',
            description: ''
        }
    },
    props: ["TaskId", "DefEditTitle", "DefEditDescription"],
    methods: {
        editTask(){
            const payload = {
                title: this.title,
                description: this.description,
                TaskId: Number(this.TaskId)
            }
            this.$emit("editTask", payload)
        }
    },
    created(){
        this.title = this.DefEditTitle;
        this.description = this.DefEditDescription
    }
}
</script>

<style>

</style>