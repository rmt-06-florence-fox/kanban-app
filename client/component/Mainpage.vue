<template>
  <div id="content">
    <!--navbar-->
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <a class="navbar-brand" href="#">KanBann!</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
          </ul>
          <button class="btn btn-outline-light my-2 my-sm-0" @click="signout">
            Sign Out
          </button>
        </div>
      </nav>
    </div>

    <!--kanban-->
    <Dashboard
      v-if="page == 'dashboard'"
      @changePage="changePage"
      @deleteData="deleteData"
      @editData=editData
      :category="category"
      :task="task"
    ></Dashboard>
    <AddTask
      v-else-if="page == 'addtask'"
      @changePage="changePage"
      @addTask="addTask"
    ></AddTask>
  </div>
</template>

<script>
import AddTask from "./Addtask";
import Dashboard from "./Dashboard";

export default {
  name: "Mainpage",
  props: ["category", "task"],
  data() {
    return {
      page: "dashboard",
    };
  },
  components: {
    AddTask,
    Dashboard,
  },
  methods: {
    signout() {
      this.$emit("signout");
    },
    changePage(page) {
      this.page = page;
    },
    addTask(value) {
      this.$emit("addTask", value);
      this.page = "dashboard";
    },
    deleteData(value) {
      this.$emit("deleteData", value);
    },
    editData(value) {
      this.$emit("editData", value);
    },
  },
};
</script>

<style>
</style>