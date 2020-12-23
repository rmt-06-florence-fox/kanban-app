<template>
  <b-card
    class="m-1 mb-3 text-wrap"
    no-body
  >
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
export default {
  name: 'Task',
  props: ['task']
}
</script>

<style>

</style>
