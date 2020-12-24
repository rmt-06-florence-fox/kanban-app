<template>
  <b-modal
    id="new-column-form"
    class="container"
    no-close-on-backdrop
    hide-footer
  >
    <b-form @submit.prevent="createColumn">
      <b-form-group
        label="Column title here"
        label-for="column-name"
      >
        <b-form-input
          v-model="colName"
          type="text"
          id="column-name"
          placeholder="e.g: Production"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Create Column</b-button>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'CreateColumn',
  data () {
    return {
      colName: ''
    }
  },
  methods: {
    createColumn () {
      const { colName } = this
      this.$store.dispatch('addColumn', { colName })
      this.$bvModal.hide('new-column-form')
      this.colName = ''
    }
  }
}
</script>

<style>

</style>
