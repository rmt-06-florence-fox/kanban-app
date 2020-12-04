<template>
  <div>
    <Login v-if="page == 'login'" @changePage="change" :dataTasks="fetchTasks"></Login>
    <Register v-else-if="page == 'register'" @changePage="change"></Register>
    <div v-else>
      <Navbar @changePage="change"></Navbar>
      <BoardList :dataTasks="tasks" :reloadTasks="fetchTasks"></BoardList>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import BoardList from "./components/BoardList";
import axios from "axios";

export default {
  name: "App",
  components: {
    Login,
    Navbar,
    BoardList,
    Register,
  },
  data() {
    return {
      page: "login",
      tasks: []
    };
  },
  methods: { 
    change(page) {
      this.page = page;
    },
    fetchTasks() {
      axios({
        method: "GET",
        url: "http://localhost:3000/tasks",
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          console.log(response.data);
          this.tasks = response.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.page = "main page";
      this.fetchTasks();
    } else if (localStorage.getItem("register")) {
      this.page = "register";
    } else {
      this.page = "login";
    }
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>