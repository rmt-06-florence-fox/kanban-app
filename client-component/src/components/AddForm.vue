<template>
  <div>
        <form class="mt-1 " @submit.prevent="newTask">
            <h5 style="text-align: center;">Add Task</h5>
            <div class="form-group">
                <label for="">Title</label>
                <input v-model="title" type="text" class="form-control" id="email-register" aria-describedby="emailHelp">
            </div>
            <input type="text" :value="backlog" hidden>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span @click="mainPage" class="btn btn-primary">Back</span>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddForm",
    data() {
        return {
            title: "",
            backlog: "Backlog"
        }
    },
    methods: {
        mainPage() {
            this.$emit("MainPage", "Main Page")
        },
        newTask() {
            const payload = {
                title: this.title,
                category: this.backlog
            }
            this.$emit("createTask", payload)
        }
    }
}
</script>

<style>

</style>