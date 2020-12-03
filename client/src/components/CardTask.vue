<template>
  <div class="card bg-success align-items-center justify-content-center mt-1" style="height:10vh;width:100%">
      <h6>title: {{task.title}}</h6>
      <h6>due date: {{task.due_date.split('T')[0]}}</h6>
  </div>
</template>

<script>
export default {
    props:['task']

}
</script>

<style>

</style>