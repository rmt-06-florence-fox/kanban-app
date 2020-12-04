<template>
  <div class="kbn-col">
    <div class="item"
     :class="category.color">
      {{ category.label }}
    </div>
    <div 
    class="bg-card" 
    v-for="task in filteredTask" 
    :key="task.id" 
    :task="task">
      <div class="card-content">
        <div class="title-card">
          {{ task.title }}
          {{task.status}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["category", "tasks"],
  computed: {
    filteredTask (){
      return this.tasks.filter(e => e.status === this.category.name)
    }
  }
};
</script>

<style>
</style>