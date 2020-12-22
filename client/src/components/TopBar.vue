<template>
  <b-navbar variant="dark" type="dark" toggleable="sm">
    <b-navbar-brand>Kanban</b-navbar-brand>
    <b-navbar-toggle target="collapseable-navs"></b-navbar-toggle>
    <b-collapse id="collapseable-navs" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-button variant="success" class="mx-2">New Task</b-button>
        <b-button variant="success" class="mx-2">New Column</b-button>
        <b-button variant="danger" class="mx-2">Log Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
