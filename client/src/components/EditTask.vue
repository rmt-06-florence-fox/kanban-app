<template>
  <b-modal
    :id="modalId"
    class="container"
    title="Edit task"
    no-close-on-backdrop
    hide-footer
    centered
  >
    <b-form @submit.prevent="onEdit">
      <b-form-group
        label="Type your task here"
        label-for="task-title"
      >
        <b-form-input
          type="text"
          id="task-title"
          v-model="title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Change Column"
        label-for="task-column"
      >
        <b-form-select
          v-model="ColumnId"
          :options="columns"
        ></b-form-select>
      </b-form-group>
      <b-button type="submit" variant="secondary">Edit Task</b-button>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'EditTask',
  data () {
    return {
      title: '',
      ColumnId: 0
    }
  },
  props: ['task'],
  computed: {
    modalId () {
      return 'edit-' + this.task.id
    },
    columns () {
      const cols = this.$store.state.columns.map(col => {
        return { text: col.colName, value: col.id }
      })
      return cols
    }
  },
  methods: {
    onEdit () {
      this.$store.dispatch('editTask', { title: this.title, ColumnId: this.ColumnId, id: this.task.id })
      this.$bvModal.hide('edit-' + this.task.id)
    }
  },
  created () {
    this.title = this.task.title
    this.ColumnId = this.task.ColumnId
  }
}
</script>

<style>

</style>
