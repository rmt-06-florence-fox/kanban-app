<template>
  <div class="row flex-container-kanban">
    <KanbanBoard 
    v-for="category in categories" 
    :key="category.id" 
    :category="category" 
    :tasks=tasks 
    :loggedInEmail=loggedInEmail
    @getCategory="getCategory"
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
    }
  }
};
</script>

<style scoped>
</style>