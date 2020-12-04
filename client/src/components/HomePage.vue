<template>
  <div id="home-page">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div id = "logo">
            <a class ="nav-logo" ><img width="200px" src="../image/logo.png">
        </div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <a class="nav-link" href="#"><span class="sr-only"></span></a>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <div>
          <form class="form-inline my-2 my-lg-0">
            <button @click.prevent="toAddForm" class="btn btn-outline btn-warning mr-2" id="add-task" type = "submit">Add Task</button>
            <button @click.prevent="logout" class="btn btn-outline btn-danger" id = "tombol-logout" type="submit">Logout</button>
          </form>
        </div>
    </nav>
        <div class = "container-category font-weight-bold mt-2">
            <!--CATEGORY-->
            <Category
                v-for="(cat, index) in categories"
                :key="index"
                :kategoriDetail="cat"
                :tasks="tasks"
                @toEditPage="toEditPage"
                @destroy="destroy">
            </Category>
        </div>
        <div class="black-market mt-4">newKanban ® 2020</div>
        <div class = "container-category">
            <!--TASK LIST-->
        </div>
    </div>
</template>

<script>
import Category from './Category'
export default {
    name: 'HomePage',
    components: {
        Category
    },
    props: [ 'categories', 'tasks' ],
    methods: {
        toAddForm() {
            this.$emit('toAddForm')
        },
        logout() {
            this.$emit('logout')
        },
        toEditPage(payload) {
            this.$emit('toEditPage', payload)
        },
        destroy(hapus) {
            this.$emit('destroy', hapus)
        }
    }
}
</script>

<style>

</style>