<template>
  <div>
    <Login v-if="page == 'login'" @changePage="change" :dataTasks="fetchTasks"></Login>
    <Register v-else-if="page == 'register'" @changePage="change"></Register>
    <div v-else>
      <Navbar :reloadTasks="fetchTasks" @changePage="change"  id="navbar" ></Navbar>
      <BoardList :dataTasks="tasks" :reloadTasks="fetchTasks" :dataCategories="listCategories"></BoardList>
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
      tasks: [],
      listCategories: []
    };
  },
  methods: { 
    fetchCategories(){
      axios({
        method: "GET",
        url: "https://kanban-server-apps.herokuapp.com/categories",
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          console.log(response.data.data,'??');
          console.log(this.listCategories, 'ini sebelum listcategories');
          this.listCategories = response.data.data
          console.log(this.listCategories, 'ini listcategories');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    change(page) {
      this.page = page;
    },
    fetchTasks() {
      axios({
        method: "GET",
        url: "https://kanban-server-apps.herokuapp.com/tasks",
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
      this.fetchCategories()
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

#navbar{
  /* position:fixed; */
  widows: 100%;
}
</style>