<template>
  <div>
    <login
      v-if="currentPage === 'login'"
      @login="login"
      @to-register="redirect"
    ></login>
    <register
      v-else-if="currentPage === 'register'"
      @register="register"
      @to-login="redirect"
    ></register>
    <MainPage
      v-else
      @logout="logout"
      :tasks="tasks"
      @addtask="addtask"
    ></MainPage>
  </div>
</template>

<script>
import axios from "axios";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import MainPage from "./components/MainPage";

export default {
  name: "App",
  data() {
    return {
      currentPage: "login",
      baseUrl: "https://frozen-basin-73535.herokuapp.com",
      tasks: {
        Backlog: [],
        Todo: [],
        Doing: [],
        Done: [],
      },
    };
  },
  methods: {
    redirect(page) {
      this.currentPage = page;
    },
    register(page, input) {
      axios({
        method: "POST",
        url: `${this.baseUrl}/register`,
        data: input,
      })
        .then((response) => {
          this.currentPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(page, input) {
      axios({
        method: "POST",
        url: `${this.baseUrl}/login`,
        data: input,
      })
        .then((response) => {

          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("department", response.data.Department);
          this.getData();
          this.currentPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout(page) {
      localStorage.clear();
      this.currentPage = page;
    },
    getData() {
      axios({
        method: "GET",
        url: `${this.baseUrl}/tasks`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          const tasks = response.data;
          tasks.forEach((task) => {
            if (task.category === "Backlog") this.tasks.Backlog.push(task);
            else if (task.category === "Todo") this.tasks.Todo.push(task);
            else if (task.category === "Doing") this.tasks.Doing.push(task);
            else if (task.category === "Done") this.tasks.Done.push(task);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addtask(newTask, page) {
      axios({
        method: "POST",
        url: `${this.baseUrl}/tasks`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: newTask,
      })
        .then((response) => {
          (this.tasks = {
            Backlog: [],
            Todo: [],
            Doing: [],
            Done: [],
          }),
            this.getData();
          this.currentPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Login,
    Register,
    MainPage,
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.currentPage = "MainPage";
      this.getData();
    } else {
      this.currentPage = "login";
    }
  },
};
</script>

<style>
</style>
