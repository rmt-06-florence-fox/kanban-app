<template>
  <div>
    <login
      v-if="currentPage === 'login'"
      @loggedIn="redirect"
      @to-register="redirect"
    ></login>
    <register
      v-else-if="currentPage === 'register'"
      @to-login="redirect"
    ></register>
    <MainPage v-else @logout="logout" :tasks="tasks" @addtask='addtask'></MainPage>
    <div class="custom">
      <social-login v-if="currentPage !== 'MainPage'"></social-login>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Login from "./components/LoginPage";
import SocialLogin from "./components/SocialLogin";
import Register from "./components/RegisterPage";
import MainPage from "./components/MainPage";

export default {
  name: "App",
  data() {
    return {
      currentPage: "login",
      baseUrl: "http://localhost:3000",
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
    logout(page) {
      localStorage.clear();
      this.currentPage = page;
    },
    getData() {
      axios({
        method: "GET",
        url: `${this.baseUrl}/tasks`,
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImVtYWlsIjoic2VjdXJpdHRAbWFpbC5jb20iLCJuYW1lIjoiU2F0cGFtIEtvbXBsZWsiLCJEZXBhcnRtZW50SWQiOjEsImlhdCI6MTYwNjg3MjMwN30.WCkxuRdZBhNMlKrY3VFAw7HUOmHLUnhEgR3BKJ0n7Sc",
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
    addtask(newTask){
      console.log(newTask,'<--dari App')
    }
  },
  components: {
    Login,
    SocialLogin,
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
