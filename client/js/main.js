var filters = {
  backlog: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 1;
    });
  },
  todo: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 2;
    });
  },
  ongoing: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 3;
    });
  },
  completed: function (tasks) {
    return tasks.filter(function (task) {
      return task.status === 4;
    });
  },
};

Vue.component("task-card", {
  props: ["task"],
  template: `
    <div class="card">
      <div class="card-content">{{ task.name }}</div>
      <footer class="card-footer">
        <div class="card-footer-item">{{ task.assignee }}</div>
        <div class="card-footer-item">{{ task.duration }} day(s)</div>
      </footer>
      
      <footer class="card-footer">
        <a class="card-footer-item" @click="decrementStatus(task)">◀︎</a>
        <a class="card-footer-item" @click="incrementStatus(task)">▶︎</a>
      </footer>
    </div>
  `,
  methods: {
    incrementStatus: function (task) {
      if (1 <= task.status && task.status <= 3) {
        task.status++;
      }
    },
    decrementStatus: function (task) {
      if (2 <= task.status && task.status <= 4) {
        task.status--;
      }
    },
  },
});

new Vue({
  el: "#board",
  data: {
    tasks: [
      { name: "makan", status: 1, assignee: "ican", duration: 3 },
      { name: "masak aer", status: 3, assignee: "budi", duration: 2 },
      { name: "ke pasar", status: 3, assignee: "sule", duration: 1 },
      { name: "beli odol", status: 3, assignee: "cimicimi", duration: 1 },
    ],
    newTaskName: "",
    newTaskAssignee: "",
    newTaskDuration: 0,
  },
  computed: {
    tasksBacklog: function () {
      return filters.backlog(this.tasks);
    },
    tasksTodo: function () {
      return filters.todo(this.tasks);
    },
    tasksOngoing: function () {
      return filters.ongoing(this.tasks);
    },
    tasksCompleted: function () {
      return filters.completed(this.tasks);
    },
  },
  methods: {
    addTask() {
      this.tasks.push({
        name: this.newTaskName,
        status: 1,
        assignee: this.newTaskAssignee,
        duration: this.newTaskDuration,
      });
    },
  },
});
