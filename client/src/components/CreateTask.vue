<template>
  <b-modal
    id="new-task-form"
    class="container"
    title="add a new task"
    no-close-on-backdrop
    hide-footer
    centered
  >
    <b-form @submit.prevent="createTask">
      <b-form-group
        label="Type your task here"
        label-for="task-title"
      >
        <b-form-input
          v-model="title"
          type="text"
          id="task-title"
          placeholder="e.g: doing things"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Create Task</b-button>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    createTask () {
      const title = this.title
      this.$store.dispatch('addTask', { title })
      this.$bvModal.hide('new-task-form')
      this.title = ''
    }
  }
}
</script>

<style>

</style>
