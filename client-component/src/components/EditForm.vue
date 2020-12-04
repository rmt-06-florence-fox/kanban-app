<template>
    <div>
        <form class="mt-1 " @submit.prevent="edit(task.id)">
            <input type="text" :value="task.id">
            <h5 style="text-align: center;">Edit Task</h5>
            <div class="form-group">
                <label for="">Title</label>
                <input v-model="title" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="inputState">Category</label>
                <select v-model="category" id="inputState" class="form-control">
                    <option>Option</option>
                    <option>Backlog</option>
                    <option>Todo</option>
                    <option>Doing</option>
                    <option>Done</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span @click="mainPage" class="btn btn-primary">Back</span>
        </form>
    </div>
</template>

<script>
export default {
    name: "EditForm",
    props: ["task"],
    data() {
        return {
            title: "",
            category: ""
        }
    },
    methods: {
        mainPage() {
            this.$emit("MainPage", "Main Page")
        },
        edit(id) {
            // console.log(id)
            const payload = {
                title: this.title,
                category: this.category
            }
            this.$emit("EditPage", "Main Page", payload, id)
        }
    }
}
</script>

<style>

</style>