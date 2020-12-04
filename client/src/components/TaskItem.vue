<template>
  <div class="card is-shady">
    <div class="card-image has-text-centered">
      <i class="fa fa-paw"></i>
    </div>
    <div class="card-content">
      <div class="content">
        <h4>{{task.title}}</h4>
        <small>author:</small>
        <h4>{{task.User.username}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
};
</script>

<style>
</style>