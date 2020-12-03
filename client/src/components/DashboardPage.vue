<template>
  <div id="board" class="hero-body mt-4">
    <!-- card container -->
    <div class="container has-text-centered">
    <input type="text" v-model="newTaskName" placeholder="what will u do" />
          <input type="text" v-model="newTaskAssignee" placeholder="who?" />
          <input type="number" v-model="newTaskDuration"/>
          <button v-on:click="addTask">Add</button>

    <hr />
    <div class="container card-container">
      <div class="columns">
        <div class="column column-items status-1 mx-3">
          <div class="tags has-addons">
            <span class="tag">Backlog</span>
            <!-- <span class="tag is-dark">{{ tasksBacklog.length }}</span> -->
          </div>

          <task-card
            :task="task"
            v-for="task in tasksBacklog"
            :key="task.name"
          ></task-card>
        </div>

        <div class="column column-items status-2 mx-3">
          <div class="tags has-addons">
            <span class="tag">Todo</span>
            <!-- <span class="tag is-dark">{{ tasksTodo.length }}</span> -->
          </div>

          <task-card
            :task="task"
            v-for="task in tasksTodo"
            :key="task.name"
          ></task-card>
        </div>

        <div class="column column-items status-3 mx-3">
          <div class="tags has-addons">
            <span class="tag">Ongoing</span>
            <!-- <span class="tag is-dark">{{ tasksOngoing.length }}</span> -->
          </div>

          <task-card
            :task="task"
            v-for="task in tasksOngoing"
            :key="task.name"
          ></task-card>
        </div>

        <div class="column column-items status-4 mx-3">
          <div class="tags has-addons">
            <span class="tag">Completed</span>
            <!-- <span class="tag is-dark">{{ tasksCompleted.length }}</span> -->
          </div>

          <task-card
            :task="task"
            v-for="task in tasksCompleted"
            :key="task.name"
          ></task-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard page",
};
</script>

<style>
</style>