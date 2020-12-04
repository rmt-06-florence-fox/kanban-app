<template>
  <div>
    <nav class="navbar navbar-light">
    <a class="navbar-brand p-2" href="#">
      Kanban Board
    </a>

    <a href="#" class="btn btn-info btn-lg" @click="logout">
      <span class="glyphicon glyphicon-log-out"></span> Log out
    </a>
  </nav>
    <div class="board-container">
    <!-- CATEGORY -->
    <Category
      v-for="category in categories" :key="category.id"
      :categoryName="category.name"
      :categories="categories"
      :tasks="tasks"
      @changePage='changePage'
      @deleteTask='deleteTask'
      @moveTask='moveTask'
      @editTask="editTask"
    ></Category>
    <!-- LEMPAR TASKS PROPS KE COMPONENT CATEGORY -->
    
    
  </div>
  </div>
</template>

<script>
import Category from './Category'

export default {
  name: 'HomePage',
  props: ['tasks', 'categories'],
  components: {
    Category
  },
  methods: {
    changePage(payload){
      this.$emit("changePage", payload)
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    },
    moveTask(payload){
      console.log(payload, 'di home');
      this.$emit('moveTask', payload)
    },
    logout(){
      this.$emit('logout')
    },
    editTask(payload){
      this.$emit('editTask', payload)
    }
  }
}
</script>

<style>

</style>