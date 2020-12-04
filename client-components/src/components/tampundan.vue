<template>
  <div>
      <div class="col-sm text-center">
        <div
          style="width: 400px"
          class="p-3 m-3 mb-2 rounded bg-warning text-dark"
        >
          <div class="d-flex justify-content-between">
            <p></p>
            <h6>Todo</h6>
            <!-- modal -->
            <AddTaskTodo category="todo" :reloadTasks="reloadTasks"></AddTaskTodo>
          </div>
        </div>
        <div v-for="task in dataTasks.data" :key="task.id">
          <TaskItem
            :reloadTasks="reloadTasks"
            :task="task"
            v-if="task.category == 'todo'"
          ></TaskItem>
        </div>
      </div>
      <div class="col-sm text-center">
        <div
          style="width: 400px"
          class="p-3 m-3 mb-2 rounded bg-info text-white"
        >
          <div class="d-flex justify-content-between">
            <p></p>
            <h6>Doing</h6>
            <!-- modal -->
            <AddTaskDoing category="doing" :reloadTasks="reloadTasks" modalId="doing"></AddTaskDoing>
          </div>
        </div>
        <div v-for="task in dataTasks.data" :key="task.id">
          <TaskItem
            :reloadTasks="reloadTasks"
            :task="task"
            v-if="task.category == 'doing'"
          ></TaskItem>
        </div>
      </div>
      <div class="col-sm text-center">
        <div
          style="width: 400px"
          class="p-3 m-3 mb-2 rounded bg-success text-white"
        >
          <div class="d-flex justify-content-between">
            <p></p>
            <h6>Done</h6>
            <!-- modal -->
            <AddTaskDone category="done" :reloadTasks="reloadTasks" modalId="done"></AddTaskDone>
          </div>
        </div>
        <div v-for="task in dataTasks.data" :key="task.id">
          <TaskItem
            :reloadTasks="reloadTasks"
            :task="task"
            v-if="task.category == 'done'"
          ></TaskItem>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>