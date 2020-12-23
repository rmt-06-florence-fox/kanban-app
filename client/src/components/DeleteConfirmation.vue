<template>
  <b-modal :id="modalId" centered hide-footer>
    <span class="h4 mx-3">Are you sure you want to delete:</span>
    <p class="p-3 m-3 bg-dark text-white">{{ task.title }}</p>
    <b-button-group class="container">
      <b-button @click="onConfirmed" variant="danger"> Sure </b-button>
      <b-button @click="$bvModal.hide(modalId)"> No </b-button>
    </b-button-group>
  </b-modal>
</template>

<script>
export default {
  name: 'DeleteConfirmation',
  props: ['task'],
  methods: {
    onConfirmed () {
      this.$store.dispatch('deleteTask', this.task.id)
    }
  },
  computed: {
    modalId () {
      return 'delete-' + this.task.id
    }
  }
}
</script>

<style>

</style>
