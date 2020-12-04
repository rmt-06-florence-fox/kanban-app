<template>
  <div class="row flex-container-kanban">
    <KanbanBoard 
    v-for="category in categories" 
    :key="category.id" 
    :category="category" 
    :tasks=tasks 
    :loggedInEmail=loggedInEmail
    @getCategory="getCategory"
    @emitPopulate="emitPopulate"
    ></KanbanBoard>
   
  </div>
</template>

<script>
import KanbanBoard from "./kanban-board.vue"
export default {
  name: "Board",
  data() {
    return {
      message: 'Hello world',
    };
  },
  props: ['categories', 'tasks', 'loggedInEmail'],
  components: {
    KanbanBoard,

  },
  methods: {
    getCategory(CategoryId, page){
      this.$emit('getCategory', CategoryId, page)
    },
    emitPopulate(task, page){
      this.$emit('emitPopulate', task, page)
    }
  }
};
</script>

<style scoped>
</style>