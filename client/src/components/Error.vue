<template>
  <b-modal
    id="error-modal"
    class="container"
    hide-footer
    title="Ooopps, error(s) just happened"
  >
    <span class="h5 text-danger" v-for="err in errors" :key="err">{{err}}</span>
  </b-modal>
</template>

<script>
export default {
  name: 'Error',
  computed: {
    errors () {
      return this.$store.state.errors
    }
  },
  watch: {
    errors () {
      if (this.errors.length) {
        this.$bvModal.show('error-modal')
      } else {
        this.$bvModal.hide('error-modal')
      }
    }
  }
}
</script>

<style>

</style>
