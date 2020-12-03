<template>
  <div class="justify-content-center">
            <nav class="navbar navbar-light bg-dark">
                <div id = "logo">
                    <a @click.prevent="toAddForm" class ="nav-logo" ><img width="200px" src="../image/logo.png">
                </div>
                <ul class="navbar-nav">
                    <a class="nav-link" href="#"><span class="sr-only"></span></a>
                </ul>
                <div>
                  <form class="form-inline my-2 my-lg-0">
                    <button @click.prevent="ready" class="btn my-2 my-lg-6 btn-outline btn-danger" id="add-task" type = "submit">Logout</button>
                  </form>
                </div>
            </nav><br><br>
            <div class="container col-4">
                <form class="addForm" @submit.prevent="addTodo"><br>
                    <h3 class="display-4 font-weight-bold">Add Task</h3>
                    <div class="form-group">
                        <label for="title" class="text-light">Title</label>
                        <input v-model ="title" type="text" class="form-control" id="title">    
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a Category :</label>
                        <select class="form-control" id="category" v-model="category">
                            <option disabled value ="">Please select one</option>
                            <option value="BACKLOG">BACKLOG</option>
                            <option value="TODO">TODO</option>
                            <option value="DOING">DOING</option>
                            <option value="DONE">DONE</option>
                        </select>
                    </div>
                        <button type="submit" class="btn btn-primary btn-block">SAVE</button>
                </form>
                <button @click.prevent="cancelButton" type="submit" class="mt-2 btn btn-warning btn-block">cancel</button>
            </div>
        </div> 
</template>

<script>
export default {
    name: 'AddForm',
    data() {
        return {
            title: '',
            category: ''
        }
    },
    methods: {
        addTodo() {
            let payload= {
                title: this.title,
                category: this.category
            }
            this.$emit('addTodo',payload)
        },
        cancelButton() {
            this.$emit('cancelButton')
        }
    }
}
</script>

<style>

</style>