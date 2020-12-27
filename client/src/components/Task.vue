<template>
  <b-card
    class="m-1 mb-3 text-wrap item"
    no-body
    :id="task.id"
  >
    <b-button-group>
      <DeleteConfirmation :task="task" />
      <EditTask :task="task" />
      <b-button
      class="bg-light border-light"
      @click="leftColumn"
      :disabled="disablerLeft"><b-icon icon="arrow-left-circle" scale="1.5" variant="primary"></b-icon></b-button>
      <b-button
      class="bg-light border-light"
      @click="$bvModal.show('edit-' + task.id)"
      ><b-icon icon="pencil-square" scale="1.5" variant="dark"></b-icon></b-button>
      <b-button
        class="bg-light border-light"
        @click="$bvModal.show('delete-' + task.id)"
      ><b-icon icon="x-circle" scale="1.5" variant="danger"></b-icon></b-button>
      <b-button
      class="bg-light border-light"
      @click="rightColumn"
      :disabled="disablerRight"><b-icon icon="arrow-right-circle" scale="1.5" variant="primary"></b-icon></b-button>
    </b-button-group>
    <b-card-body class="p-2">
      <p>{{task.title}}</p>
      <h5></h5>
    </b-card-body>
    <b-card-footer>
      <p>{{task.User.userName}}</p>
    </b-card-footer>
  </b-card>
</template>

<script>
import DeleteConfirmation from './DeleteConfirmation.vue'
import EditTask from './EditTask.vue'
export default {
  name: 'Task',
  props: ['task'],
  components: {
    DeleteConfirmation,
    EditTask
  },
  computed: {
    ids () {
      return this.$store.state.columns.map(col => col.id)
    },
    disablerRight () {
      if (this.ids.indexOf(this.task.ColumnId) === this.ids.length - 1) return true
      return false
    },
    disablerLeft () {
      if (this.ids.indexOf(this.task.ColumnId) === 0) return true
      return false
    }
  },
  methods: {
    leftColumn () {
      let { id, ColumnId } = this.task
      ColumnId--
      this.$store.dispatch('alterColumn', { id, ColumnId })
    },
    rightColumn () {
      let { id, ColumnId } = this.task
      ColumnId++
      this.$store.dispatch('alterColumn', { id, ColumnId })
    }
  }
}
</script>

<style>

</style>
