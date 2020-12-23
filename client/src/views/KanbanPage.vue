<template>
  <div class="h-100 w-100">
    <TopBar />
    <CreateTask />
    <CreateColumn />
    <div id="group">
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Column from '../components/Column.vue'
import CreateColumn from '../components/CreateColumn.vue'
import CreateTask from '../components/CreateTask.vue'
export default {
  name: 'KanbanPage',
  components: {
    TopBar,
    Column,
    CreateColumn,
    CreateTask

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
