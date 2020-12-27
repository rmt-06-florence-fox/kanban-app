<template>
  <div class="h-100 w-100">
    <TopBar />
    <CreateTask />
    <CreateColumn />
    <BoardList />
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import CreateColumn from '../components/CreateColumn.vue'
import CreateTask from '../components/CreateTask.vue'
import BoardList from '../components/BoardList.vue'
// import draggable from 'vuedraggable'
export default {
  name: 'KanbanPage',
  components: {
    TopBar,
    CreateColumn,
    CreateTask,
    BoardList
    // draggable
  },
  created () {
    this.$store.dispatch('fetchColumns')
    this.$store.dispatch('fetchTasks')
  }
}
</script>

<style scoped>
#group {
  max-width: 100%;
  max-height: 90%;
  height: 90%;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}

</style>>
