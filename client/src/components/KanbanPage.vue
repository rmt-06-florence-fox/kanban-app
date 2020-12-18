<template>
  <section>
    <div class="layout layout-nav-top">
      <div class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="#">
          <img alt="Pipeline" src="../assets/img/logo.svg" />
        </a>
        <div class="collapse navbar-collapse justify-content-between" id="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">DanBam</a>
            </li>
          </ul>
          <div class="d-lg-flex align-items-center">
            <div class="d-none d-lg-block">
              <div class="dropdown">
                <button class="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
                  <i class="material-icons">exit_to_app</i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a @click.prevent="logout" href="#" class="dropdown-item">Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="breadcrumb-bar navbar bg-white sticky-top">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Kanban Board</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="container-kanban">
          <!-- Category -->
          <div class="kanban-board container-fluid mt-lg-3">

            <Category
              v-for="category in categories" 
              :key="category.id"
              :category="category"
              :tasks="tasks"
              @addTask="addTask"
              @getCategoryId="getCategoryId"
              @deleteTask="deleteTask"
            ></Category>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Category from './Category'
export default {
  name: 'KanbanPage',
  props: ['categories','tasks', 'category'],
  components: {Category},
  data() {
    return {
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$emit('emit-change-page', 'login-page')
    },
    addTask(payload) {
      this.$emit('addTask', payload)
    },
    getCategoryId(payload) {
      this.$emit('getCategoryId', payload)
    },
     deleteTask(id) {
      this.$emit('deleteTask', id)
    }
  }
}
</script>

<style>

</style>