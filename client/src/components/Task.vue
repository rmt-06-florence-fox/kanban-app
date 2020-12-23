<template>
  <b-card
    class="m-1 mb-3 text-wrap"
    no-body
  >
    <b-button-group>
      <DeleteConfirmation :task="task" />
      <EditTask :task="task" />
      <b-button
      class="bg-light border-light"
      @click="$bvModal.show('edit-' + task.id)"
      >
        <b-icon icon="pencil-square" scale="1.5" variant="dark"></b-icon>
      </b-button>
      <b-button
        class="bg-light border-light"
        @click="$bvModal.show('delete-' + task.id)"
      >
        <b-icon icon="x-circle" scale="1.5" variant="danger"></b-icon>
      </b-button>
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
  }
}
</script>

<style>

</style>
