<template>
  <b-navbar variant="dark" type="dark" toggleable="sm">
    <b-navbar-brand>Kanban</b-navbar-brand>
    <b-navbar-toggle target="collapseable-navs"></b-navbar-toggle>
    <b-collapse id="collapseable-navs" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-button
        variant="success"
        class="mx-2"
        v-b-modal.new-task-form
        >New Task</b-button>

        <b-button
        variant="success"
        class="mx-2"
        v-b-modal.new-column-form
        >New Column</b-button>
        <b-button variant="danger" class="mx-2" @click="logout">Log Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
