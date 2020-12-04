<template>
  <div class="row flex-container-kanban">
    <TaskBoard 
      v-for="category in categories" 
      :key="category.id" 
      :category="category" 
      :tasks=tasks 
      :loggedInEmail=loggedInEmail
      @getCategory="getCategory"
      @emitPopulate="emitPopulate"
      @emitMoveTask="emitMoveTask"
      @emitDeleteTask="emitDeleteTask"
    ></TaskBoard>
   
  </div>
</template>

<script>
import TaskBoard from "./TaskBoard.vue"
export default {
  name: "BoardList",
  data() {
    return {
      message: 'Hello world',
    };
  },
  props: ['categories', 'tasks', 'loggedInEmail'],
  components: {
    TaskBoard,

  },
  methods: {
    getCategory(CategoryId, page){
      this.$emit('getCategory', CategoryId, page)
    },
    emitPopulate(task, page){
      this.$emit('emitPopulate', task, page)
    },
    emitMoveTask(task, page){
      this.$emit('emitMoveTask', task, page)
    },
    emitDeleteTask(task){
      console.log(task + " <<< ini dari board")
      this.$emit('emitDeleteTask', task)
    }
  }
};
</script>

<style scoped>
</style>