<template>
  <b-modal
    id="new-task-form"
    class="container"
    no-close-on-backdrop
    hide-footer
  >
    <b-form>
      <b-form-group
        label="Type your task here"
        label-for="task-title"
      >
        <b-form-input
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
  name: 'CreateTask'
}
</script>

<style>

</style>
