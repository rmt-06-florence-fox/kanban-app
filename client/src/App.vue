<template>
  <div>
    <Nav @addTask="goAdd" @logOut="goLogOut" :currentPage="currentPage" :dataTask="dataTask"></Nav>
    <LoginPage
      v-if="currentPage == 'loginPage'"
      @nextPage="goHome"
      @regPage="goRegist"
      @loginGoogle="googleLogin"
    ></LoginPage>
    <RegisterPage
      v-if="currentPage == 'registerPage'"
      @backLogin="goLogin"
      @nextPage="goLogin"
    ></RegisterPage>
    <div class="row justify-content-around" v-if="currentPage == 'homePage'">
      <TaskBoard
        class="d-flex"
        v-for="category in categories"
        :key="category.id"
        :dataTask="dataTask"
        :category="category"
        @destroyTask="deleteTask"
        @editTask="goEdit"
      ></TaskBoard>
    </div>
    <AddTask
      v-if="currentPage == 'addPage'"
      @backHome="goHome"
      @plusTask="addTask"
    ></AddTask>
    <UpdateTask v-if="currentPage == 'updatePage'" @backHome="goHome"></UpdateTask>
  </div>
</template>

<script>
import Nav from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import TaskBoard from "./components/TaskBoard";
import AddTask from "./components/addTask";
import UpdateTask from "./components/editTask";
export default {
  name: "App",
  data() {
    return {
      currentPage: "loginPage",
      categories: [
        {
          id: 1,
          name: "backlog",
        },
        {
          id: 2,
          name: "todo",
        },
        {
          id: 3,
          name: "inprogress",
        },
        {
          id: 4,
          name: "done",
        },
      ],
      dataTask: [],
    };
  },
  methods: {
    goHome() {
      if (localStorage.getItem("access_token")) {
        this.currentPage = "homePage";
        this.fetchTask();
      }
    },
    goRegist() {
      this.currentPage = "registerPage";
    },
    goLogin() {
      this.currentPage = "loginPage";
    },
    goAdd() {
      if (localStorage.getItem("access_token")) {
        this.currentPage = "addPage";
      }
    },
    goLogOut() {
      console.log("masuk sini");
      localStorage.removeItem("access_token");
      this.currentPage = "loginPage";
    },
    goEdit() {
        this.currentPage = 'updatePage'
    },

    addTask() {
      this.$api({
        method: "POST",
        url: "tasks",
      })
        .then((Response) => {
          console.log(Response);
          this.currentPage = "homePage";
          this.fetchTask();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.title = "";
        });
    },

    fetchTask() {
      this.$api({
        method: "GET",
        url: "tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((Response) => {
          this.dataTask = Response.data;
          console.log(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteTask(id) {
      this.$api({
        method: "DELETE",
        url: `tasks/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((Response) => {
          this.dataTask = Response.data;
          this.fetchTask();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    googleLogin(idToken) {
      this.$api({
        url: "googleLogin",
        method: "POST",
        data: {
          token: idToken,
        },
      })
        .then((Response) => {
          localStorage.setItem("access_token", Response.data.access_token);
          localStorage.setItem("UserId", Response.data.UserId);
          this.currentPage = "homePage";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    Nav,
    LoginPage,
    RegisterPage,
    TaskBoard,
    AddTask,
    UpdateTask,
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.currentPage = "homePage";
      this.fetchTask();
    } else {
      this.currentPage = "loginPage";
    }
  },
};
</script>

<style>
</style>