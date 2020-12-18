<template>
      <div>
        <div class="col col-sm-5 container" style="box-shadow: 0px 0px 10px; margin-top: 20px;">
            <div style="height: 80px;"></div>
            <h2 class="row justify-content-md-center">New Task</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-6" style="margin: 7%">
        <form>
        <div class="form-group">
            <input type="text" class="form-control" v-model="newData.title" required placeholder="Title">
        </div>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="newData.category">
            <option selected disabled>Category...</option>
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
        </select><br>
        <br><button type="submit" class="btn btn-primary" @click.prevent="addTask">Submit</button>
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
            newData: {
                title: '',
                category: ''
            }
        }
    },
    methods: {
        backHome() {
            this.$emit("backHome")
        },
        addTask() {
        this.$api({
            method: "POST",
            url: "tasks",
            headers: {
            access_token: localStorage.getItem('access_token')
            },
            data: this.newData
        })
        .then((Response) => {
            console.log(Response);
            this.fetchTask();
            this.$emit("backHome")
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            this.newData.title = "",
            this.newData.category = ""
        });
        },
    }
}
</script>

<style>

</style>