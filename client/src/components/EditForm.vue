<template>
  <div class="justify-content-center ">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div id = "logo">
            <a class ="nav-logo" ><img width="200px" src="../image/logo.png">
        </div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <a class="nav-link" href="#"><span class="sr-only"></span></a>
        </ul>
          <form class="form-inline my-2 my-lg-0">
            <button @click.prevent="logout" class="btn btn-outline btn-danger" id = "tombol-logout" type="submit">Logout</button>
          </form>
        </nav>
            <div class="container col-4 ">
                <form @submit.prevent="editTask"><br><br><br>
                    <h3 class="display-4 font-weight-bold">Edit Task</h3>
                    <div class="form-group">
                        <label for="title" class="text-light">Title</label>
                        <input v-model="title" type="title" class="form-control" id="title">    
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a Category :</label>
                        <select class="form-control" id="category" v-model="selected">
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
    name: 'EditForm',
    data() {
        return {
            title: this.detailTask.title,
            selected: this.detailTask.category
        }
    },
    props: ['detailTask'],
    methods: {
        cancelButton() {
            this.$emit('cancelButton')
        },
        editTask(){
            let payload = {
                id : this.detailTask.id,
                title : this.title,
                category : this.selected
            }
            this.$emit('editTask', payload)
        },
        logout() {
            this.$emit('logout')
        }
    }
}
</script>

<style>

</style>