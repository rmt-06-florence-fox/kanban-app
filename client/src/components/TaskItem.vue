<template>
  <div>
    <task-card
      :task="task"
      v-for="task in tasksBacklog"
      :key="task.name"
    ></task-card>
  </div>
</template>

<script>
export default {
  name: "taskItem",
}
</script>

<style>

</style>