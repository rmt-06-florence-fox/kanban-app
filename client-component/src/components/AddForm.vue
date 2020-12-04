<template>
  <div>
        <form class="mt-1 " @submit.prevent="newTask">
            <h5 style="text-align: center;">Add Task</h5>
            <div class="form-group">
                <label for="">Title</label>
                <input v-model="title" type="text" class="form-control" id="email-register" aria-describedby="emailHelp">
            </div>
            <div class="col-auto my-1">
            <label class="sr-only" for="inlineFormCustomSelect">Preference</label>
            <select v-model="categori" class="custom-select" id="inlineFormCustomSelect">
                <option selected disabled>Choose</option>
                <option :value="item" v-for="item in category" :key="item.id">{{item}}</option>
            </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span @click="mainPage" class="btn btn-primary">Back</span>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddForm",
    props: ["category"],
    data() {
        return {
            title: "",
            categori: ""
        }
    },
    methods: {
        mainPage() {
            this.$emit("MainPage", "Main Page")
        },
        newTask() {
            const payload = {
                title: this.title,
                category: this.categori
            }
            // console.log(payload)
            this.$emit("CreateTask", payload)
        }
    }
}
</script>

<style>

</style>