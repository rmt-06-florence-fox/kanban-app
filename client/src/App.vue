<template>
  <div>
    <SignIn
      v-if="page == 'signin'"
      @changePage="changePage"
      @signin="signin"
    ></SignIn>
    <SignUp
      v-else-if="page == 'signup'"
      @changePage="changePage"
      @signup="signup"
    ></SignUp>
    <Mainpage
      v-else-if="page == 'mainpage'"
      @addTask="addTask"
      @fetch="fetch"
      @editData="editData"
      @updateData="updateData"
      @deleteData="deleteData"
      @signout="signout"
      :task="task"
      :category="category"
    ></Mainpage>
  </div>
</template>

<script>
import SignIn from "../component/Signin";
import SignUp from "../component/Signup";
import Mainpage from "../component/Mainpage";
import axios from "./axios";

export default {
  name: "App",
  data() {
    return {
      page: "signin",
      category: [
        {
          category: "Backlog",
        },
        {
          category: "Todo",
        },
        {
          category: "Doing",
        },
        {
          category: "Done",
        },
      ],
      task: [],
    };
  },
  components: {
    SignIn,
    SignUp,
    Mainpage,
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    signout() {
      localStorage.clear();
      this.page = "signin";
    },
    signin(value) {
      axios({
        url: "http://localhost:3000/signin",
        method: "POST",
        data: value,
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.page = "mainpage";
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signup(value) {
      axios({
        url: "http://localhost:3000/signup",
        method: "POST",
        data: value,
      })
        .then(({ data }) => {
          this.page = "signin";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTask(value) {
      const access_token = localStorage.getItem("access_token");
      axios({
        url: "http://localhost:3000/tasks",
        method: "POST",
        data: {
          title: value.title,
          description: value.description
        },
        headers: {
          access_token
        },
      })
        .then(({ data }) => {
          this.fetch();
          console.log(data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    fetch() {
      const access_token = localStorage.getItem("access_token");

      axios({
        url: "http://localhost:3000/tasks",
        method: "GET",
        headers: {
          access_token,
        },
      })
        .then(({ data }) => {
          this.task = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editData(value) {
      const access_token = localStorage.getItem("access_token");

      axios({
        url: `http://localhost:3000/tasks/${value.id}`,
        method: "PUT",
        data: {
          title: value.title,
          description: value.description,
        },
        headers: {
          access_token,
        },
      })
        .then(() => {
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateData(value) {
      const access_token = localStorage.getItem("access_token");

      axios({
        url: `http://localhost:3000/tasks/${value.id}`,
        method: "PATCH",
        data: {
          category: value.category,
        },
        headers: {
          access_token,
        },
      })
        .then(({ data }) => {
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteData(value) {
      const access_token = localStorage.getItem("access_token");
      console.log(value);
      axios({
        url: `http://localhost:3000/tasks/${value.taskId}`,
        method: "DELETE",
        headers: {
          access_token,
        },
      })
        .then(() => {
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      this.page = "signin";
    } else {
      this.fetch();
      this.page = "mainpage";
    }
  },
};
</script>

<style>
</style>