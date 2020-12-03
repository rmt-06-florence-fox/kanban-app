<template>
  <div>
    <div class="card">
      <div class="card-body mt-3 shadow-sm">
        <h5 class="card-title">{{ filterTask.title }}</h5>
        <p class="card-text">{{filterTask.category}}</p>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-primary far fa-edit"></button>
          <button type="button" class="btn btn-outline-primary far fa-trash-alt"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name :  "kanban-card-component",
  props : ["filterTask"]
}
</script>

<style>

</style>