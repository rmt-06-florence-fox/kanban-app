<template>
  <div>
    <div class="container">
    <h1 class="text-center">kanban</h1>
    <div class="row">
      <div class="col-sm-3" align="center" v-for="category in categories" :key="category.id" >
        <div class="p-3 mb-1 text-white rounded" :class="category.color">
          {{category.name}}
        </div>
        <!-- cards -->
        <task-board-component :tasks="tasks" :category="category.name"></task-board-component>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import taskBoardComponent from './task-board-component.vue'
export default {
  components: { taskBoardComponent },
  name : 'kaban-board-component',
  props : ['categories','tasks'],
}
</script>

<style>

</style>