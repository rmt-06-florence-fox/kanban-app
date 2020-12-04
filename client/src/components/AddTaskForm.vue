<template>
    <div class="card-body form-card rounded mb-3">
        <form @submit.prevent="add">
            <div class="form-group">
                <input type="text" class="form-control" id="taskTitle" placeholder="Title" v-model="title" required>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="taskDescription" placeholder="Description" v-model="description" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Confirm Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTaskForm",
    data(){
        return {
            title: '',
            description: ''
        }
    },
    props: ["CategoryId"],
    methods: {
        add(){
            const payload = {
                title: this.title,
                description: this.description,
                CategoryId: Number(this.CategoryId)
            }
            this.$emit("add", payload)
            this.title = "";
            this.description ="";
        }
    }
}
</script>

<style>

</style>