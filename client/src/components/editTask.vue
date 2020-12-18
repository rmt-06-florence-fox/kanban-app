<template>
      <div>
        <div class="col col-sm-5 container" style="box-shadow: 0px 0px 10px; margin-top: 20px;">
            <div style="height: 80px;"></div>
            <h2 class="row justify-content-md-center">Update Task</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-6" style="margin: 7%">
        <form @submit.prevent="addTask">
        <div class="form-group">
            <input type="text" class="form-control" v-model="title" required placeholder="Title">
        </div>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="category">
            <option selected disabled>Category...</option>
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
        </select><br>
        <br><button type="submit" class="btn btn-primary" @click="updateTask">Submit</button>
        </form><br>
        <button class="btn btn-link text-dark row" @click="backHome"><strong>Back to home</strong></button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        backHome() {
            this.$emit("backHome")
        },
        updateTask() {
            this.$emit("plusTask")
        }
    }
}
</script>

<style>

</style>