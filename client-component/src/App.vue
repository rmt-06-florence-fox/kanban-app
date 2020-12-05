<template>
  <div>
    <LoginPage v-if="pageName === 'login-page'" @changePage="changePage"></LoginPage>
    <RegisterPage v-else-if="pageName === 'register-page'" @changePage="changePage"></RegisterPage>
    <MainPage v-else-if="pageName === 'main-page'" @changePage="changePage" @setTaskId="setTaskId" @setTaskEditData="setTaskEditData"></MainPage>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MainPage from "./components/MainPage";

export default {
  name: "App",
  data() {
    return {
      pageName: 'login-page',
      TaskId: 0,
      taskEditData: {
        title: "",
        description: "",
        due_date: "",
      }
    };
  },
  methods: {
    changePage(pageName) {
      this.pageName = pageName;
    },
    setTaskId(TaskId) {
      this.TaskId = TaskId
    },
    setTaskEditData(taskEditData) {
      this.taskEditData.title = taskEditData.title,
      this.taskEditData.description = taskEditData.description,
      this.taskEditData.due_date = taskEditData.due_date
    }
  },
  components: {
    LoginPage,
    RegisterPage,
    MainPage
  },
  created() {
    if (localStorage.getItem("access_token")) {
        this.pageName = "main-page";
    } else {
        this.pageName = "login-page"
    }
  }
};
</script>

<style>
</style>