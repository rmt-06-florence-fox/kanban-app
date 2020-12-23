<template>
  <b-modal
    :id="id"
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
        ></b-form-input>
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
      id: ''
    }
  },
}
</script>

<style>

</style>
