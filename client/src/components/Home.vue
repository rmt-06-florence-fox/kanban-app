<template>
  <div>
    <Navbar v-if="pageName == 'Home-Page'" @setLogout="logout"></Navbar>
    <div class="container">
      <Login @setLogin="setLogin" v-if="pageName == 'Login-Page'"></Login>
      <div v-else-if="pageName == 'Home-Page'">
        <h1>HomePage</h1>
        <div>
          <TaskCard
            v-for="(task, i) in tasks"
            :key="i"
            :taskData="task"
            @afterDelete="updateAfterDelete"
          ></TaskCard>
        </div>
        <button
          @click="toggleAddForm"
          class="btn btn-primary btn-sm mt-4"
          v-if="showAddForm == false"
        >
          Add Task
        </button>
        <AddTask
          :reloadTask="fetchTask"
          v-if="showAddForm == true"
          @toggleAddForm="toggleAddForm"
          @afterAdd="afterAdd"
        ></AddTask>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import Login from "./LoginForm";

export default {
  data() {
    return {
      errorMessage: "",
      tasks: [],
      isLogin: false,
      pageName: "Login-Page",
      showAddForm: false,
    };
  },
  components: {
    Navbar,
    AddTask,
    TaskCard,
    Login
  },
  methods: {
    fetchTask() {
      console.log("Fetch Task Started!");
      this.$api({
        method: "GET",
        url: "/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setLogin() {
      this.isLogin = true;
      this.fetchTask();
      this.pageName = "Home-Page";
    },
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
    logout() {
      localStorage.removeItem("access_token");
      this.pageName = "Login-Page";
    },
    updateAfterDelete(id) {
      console.log("ID = ",id);
      const index = this.tasks.findIndex(el => el.id === id);
      console.log("INI INDEX : ", index);
      this.tasks.splice(index, 1);
    },
    afterAdd(result) {
      this.tasks.push(result);
    }
  },
};
</script>

<style>
</style>