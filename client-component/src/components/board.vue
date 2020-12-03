<template>
  <div class="row flex-container-kanban">
    <KanbanBoard v-for="category in categories" :key="category.id" :name="category.name" :id="category.id" :tasks=tasks></KanbanBoard>
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
  props: ['categories', 'tasks'],
  components: {
    KanbanBoard
  }
};
</script>

<style scoped>
</style>