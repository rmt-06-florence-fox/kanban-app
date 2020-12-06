<template>
  <div class="loginBox" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">
    <div class="row justify-content-center my-auto">
        <div class="row justify-content-center px-3 mb-3">
            <img id="logos" src="https://www.freepnglogos.com/uploads/logo-mobile-legend-png/logo-mobile-legend-tcash-apapun-operatornya-semua-bisa-paketcash-18.png">
        </div>
        <div class="col-md-8 col-10 my-5">
            <form @submit.prevent="update">
                <div class="form-group">
                    <label class="form-control-label text-muted">Title</label>
                    <input v-model="title" type="text" id="email" name="email" class="form-control"> </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Category</label>
                    <select v-model="category" id="psw" name="psw" class="form-control" id="exampleFormControlSelect1">
                        <option value="backlog">backlog</option>
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                    </select>
                </div>
                <div class="row justify-content-center my-3 px-3">
                    <button class="btn-block btn-color">Update</button>
                </div>
                <p class="buah row justify-content-center" style="font-size: 12px" @click="changePage">cancel</p>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "UpdateForm",
    data() {
        return {
            title: "",
            category: "",
        }
    },
    methods: {
        update() {
            this.$emit('update', this.title, this.category, this.taskData.id)
        },
        changePage() {
            this.$emit('changePage', 'home')
        }
    },
    props: ['taskData'],
    created() {
        this.title = this.taskData.title
        this.category = this.taskData.category
    }
}
</script>

<style>

</style>