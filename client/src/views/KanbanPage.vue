<template>
  <div class="h-100 w-100">
    <TopBar />
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
export default {
  name: 'KanbanPage',
  components: {
    TopBar,
    Column
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
