<template>
  <div class="column m-3 border rounded">
    <div class="p-3 text-white title text-center h4">
      {{column.colName}}
    </div>
    <Task v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  name: 'Column',
  components: {
    Task
  },
  props: ['column'],
  computed: {
    tasks () {
      const tasks = this.$store.state.tasks
      return tasks.filter(task => {
        if (task.ColumnId === this.column.id) {
          return task
        }
      })
    }
  }
}
</script>

<style scoped>
.column {
  width: 30%;
  overflow-y: scroll;
  max-height: 95%;
  height: 95%;
  display: inline-block;
}
.title {
  z-index: 1;
  position: sticky;
  top: 0;
  background: green;
}
</style>
