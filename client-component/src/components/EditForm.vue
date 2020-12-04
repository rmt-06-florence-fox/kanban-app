<template>
    <div>
        <form class="mt-1 ">
            <input type="text" :value="idTask">
            <h5 style="text-align: center;">Edit Task</h5>
            <div class="form-group">
                <label for="">Title</label>
                <input :value="titleTask" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="inputState">Category</label>
                <select :value="categoryTask" id="inputState" class="form-control">
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
    props: ["titleTask", "categoryTask", "idTask"],
    data() {
        return {
            title: "",
            category: ""
        }
    },
    methods: {
        mainPage() {
            this.$emit("MainPage", "Main Page")
        }
    }
}
</script>

<style>

</style>