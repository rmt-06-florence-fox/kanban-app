$(document).ready(function () {
  $(".modal").modal();
});

function modalAdd() {
  const instance = M.Modal.getInstance($("#modal-add"));
  instance.open();
}

function modalEdit() {
  const instance = M.Modal.getInstance($("#modal-edit"));
  instance.open();
}

var app = new Vue({
  el: "#app",
  data: {
    currentPage: "kanban-page",
    backlog: [
      {
        id: "1",
        title: "server",
        description: "coding routing",
      },
      {
        id: "2",
        title: "client",
        description: "coding frontend",
      },
    ],
    product: [
      {
        id: "1",
        title: "kanban main page",
        description: "kanban main page with materialize",
      },
      {
        id: "2",
        title: "kanban login page",
        description: "kanban login page with post routing",
      },
    ],
    development: [
      {
        id: "1",
        title: "configuring database",
        description: "creating database with postgres",
      },
      {
        id: "2",
        title: "migrating table",
        description: "creating table name and attributes",
      },
    ],
    done: [
      {
        id: "1",
        title: "forking github",
        description: "done forking origanization repository",
      },
    ],
  },
  methods: {
    showLogin() {
      this.currentPage = "login-page";
    },
    showRegister() {
      this.currentPage = "register-page";
    },
  },
});
