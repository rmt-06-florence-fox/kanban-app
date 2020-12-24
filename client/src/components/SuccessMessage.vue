<template>
  <b-modal id="success" hide-footer hide-header class="container-fluid">
    <span class="h5 text-success">{{message}}</span>
  </b-modal>
</template>

<script>
export default {
  name: 'SuccessMessage',
  computed: {
    message () {
      return this.$store.state.success
    }
  },
  watch: {
    message () {
      if (this.message.length) {
        this.$bvModal.show('success')
      } else {
        this.$bvModal.hide('success')
      }
    }
  }
}
</script>

<style>

</style>
