<template>
   <!-- <div id="group"> -->
    <draggable draggable=".item" id="group">
      <Column v-for="column in columns" :key="column.id"
      :column="column"
      :filteredTasks="$store.getters.classifiedTasks(column.id)" />
    </draggable>
    <!-- </div> -->
</template>

<script>
import Column from '../components/Column.vue'
import draggable from 'vuedraggable'
export default {
  name: 'BoardList',
  components: {
    Column,
    draggable
  },
  computed: {
    columns () {
      return this.$store.state.columns
    }
  }
}
</script>

<style>

</style>
