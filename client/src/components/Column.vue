<template>
  <div class="column m-3 border rounded" :id="'column-'+column.id">
    <div class="p-3 text-white title text-center h4">
      {{column.colName}}
    </div>
    <draggable
      :list="tasks"
      draggable=".item"
      @start="start" @end="end" :move="log"
      :animation=500
      :sort="sort"
      group="kanban"
    >
      <Task v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      />
    </draggable>
  </div>
</template>

<script>
import Task from './Task.vue'
import draggable from 'vuedraggable'
export default {
  name: 'Column',
  data () {
    return {
      sort: true
    }
  },
  components: {
    Task,
    draggable
  },
  props: ['column', 'filteredTasks'],
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  methods: {
    start (event) {
      console.log(event.item.id, 'dari event start')
      // console.log('start')
    },
    end (event) {
      // console.log('end')
      console.log(event, 'dari event end')
      const id = +event.item.id
      const ColumnId = +event.to.parentElement.id.split('-')[1]
      console.log(id)
      this.$store.dispatch('alterColumn', { id, ColumnId })
    },
    log (event) {
      console.log('masuk change')
      // console.log(event)
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
