const filters = {
  backlog: function (tasks) {
    return tasks.filter(function (task) {
      return task.category === 1;
    });
  },
  todo: function (tasks) {
    return tasks.filter(function (task) {
      return task.category === 2;
    });
  },
  ongoing: function (tasks) {
    return tasks.filter(function (task) {
      return task.category === 3;
    });
  },
  completed: function (tasks) {
    return tasks.filter(function (task) {
      return task.category === 4;
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
        <a class="card-footer-item" @click="decrementCategory(task)">◀︎</a>
        <a class="card-footer-item" @click="incrementCategory(task)">▶︎</a>
      </footer>
    </div>
  `,
  methods: {
    incrementCategory: function (task) {
      if (1 <= task.category && task.category <= 3) {
        task.category++;
      }
    },
    decrementCategory: function (task) {
      if (2 <= task.category && task.category <= 4) {
        task.category--;
      }
    },
  },
});

new Vue({
  el: "#board",
  data: {
    tasks: [
      { name: "makan", category: 1, assignee: "ican", duration: 3 },
      { name: "masak aer", category: 3, assignee: "budi", duration: 2 },
      { name: "ke pasar", category: 3, assignee: "sule", duration: 1 },
      { name: "beli odol", category: 3, assignee: "cimicimi", duration: 1 },
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
        category: 1,
        assignee: this.newTaskAssignee,
        duration: this.newTaskDuration,
      });
    },
  },
});
