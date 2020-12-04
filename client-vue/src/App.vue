<template>
  <div>
    <LoginPage
      v-show="currentPage == 'loginPage'"
      @loginApp="login"
      @showRegisterApp="showRegister"
    ></LoginPage>
    <RegisterPage
      v-show="currentPage == 'registerPage'"
      @registerApp="register"
      @showLoginApp="showLogin"
    ></RegisterPage>
    <KanbanPage
      v-show="currentPage == 'kanbanPage'"
      @logoutKanban="logout"
      @fetchDataApp="fetchData"
      :dataCard="dataCard"
      @addData="addData"
      @deleteTask="deleteTask"
      @editTask="editTask"
      @getTaskById="getTaskById"
    ></KanbanPage>
  </div>
</template>

<script>
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import KanbanPage from "./component/KanbanPage";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      currentPage: "loginPage",
      dataCard: [],
    };
  },
  components: {
    LoginPage,
    RegisterPage,
    KanbanPage,
  },
  methods: {
    login(loginData) {
      axios({
        method: "POST",
        url: "https://adhim1st-kanban-app.herokuapp.com/users/login",
        data: {
          email: loginData.email,
          password: loginData.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("access_token", response.data.access_token);
          this.fetchData();
        })
        .catch((err) => {
          console.log(err);
        });

      this.currentPage = "kanbanPage";
    },
    register(registerData) {
      axios({
        method: "POST",
        url: "https://adhim1st-kanban-app.herokuapp.com/users/register",
        data: {
          email: registerData.email,
          password: registerData.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          this.showLogin();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchData() {
      axios({
        method: "GET",
        url: "https://adhim1st-kanban-app.herokuapp.com/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data, "dari app");
          this.dataCard = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addData(payload) {
      console.log(payload, "dari app");
      axios({
        method: "POST",
        url: "https://adhim1st-kanban-app.herokuapp.com/tasks",
        data: payload,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          this.fetchData(); // edit delete juga
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editTask(payload, id) {
      console.log(payload, id, "dari app");
      axios({
        method: "PUT",
        url: `https://adhim1st-kanban-app.herokuapp.com/tasks/${id}`,
        data: payload,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }).then((response) => {
        console.log("success edit");
        this.fetchData();
      });
    },
    deleteTask(id) {
      console.log(id, "dari app");
      axios({
        method: "DELETE",
        url: `https://adhim1st-kanban-app.herokuapp.com/tasks/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log("success delete");
          this.fetchData();
        })
        .catch((err) => {});
    },
    getTaskById(id) {
      console.log(id, "from apps");
    },
    logout() {
      localStorage.clear();
      this.currentPage = "loginPage";
    },
    showRegister() {
      this.currentPage = "registerPage";
    },
    showLogin() {
      this.currentPage = "loginPage";
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.currentPage = "kanbanPage";
    } else {
      this.currentPage = "loginPage";
    }
  },
};
</script>

<style></style>
