<template>
  <section class="hero is-fullheight">
    <Navbar
      :changeStatus="changeIsLogin"
      :isLogin="isLogin"
      :checkAcc="checkAcc"
      :hasAccount="hasAccount"
    ></Navbar>

    <LandingPage
      v-if="!isLogin"
      :changeStatus="changeIsLogin"
      :checkAcc="checkAcc"
      :hasAccount="hasAccount"
    ></LandingPage>

    <DashboardPage 
      v-if="isLogin"
      :dataTasks="dataTasks"
    ></DashboardPage>

    <!-- <AddForm
      v-if="isLogin"
    ></AddForm> -->

    <EditForm
      v-if="isLogin"
    ></EditForm>

    <Footer></Footer>
  </section>
</template>


<script>
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import DashboardPage from "./components/DashboardPage";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    LandingPage,
    DashboardPage,
    AddForm,
    EditForm,
    Footer,
  },

  data() {
    return {
      pageName: "LandingPage",
      isLogin: false,
      hasAccount: true,
      dataTasks: [],
    };
  },

  methods: {
    //movePageHandler
    changeIsLogin(value) {
      this.isLogin = value;
    },
    checkAcc(value) {
      this.hasAccount = value;
    },
    toAddForm() {
      this.pageName = 'addForm';
    },
    toEditForm(payload) {
      this.pageName = payload.pageName
      this.detailTasks = payload.task
    },

    //create
    addTask(title, category) {
      this.$api({
        method: "POST",
        url: "tasks",
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title,
          category,
        },
      })
        .then(response => {
          console.log(response)
          // atur page sm fetch data
        })
        .catch((err) => {
          console.log(err)
        });
    },

    //read
    getTasks() {
      this.$api({
        method: 'GET',
        url: "tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        }
      })
      .then((response) => {
        console.log(response)
        this.dataTasks = response.data
      })
      .catch((err) => {
        console.log(err)
      })
    },

    //update
    editTask(editData) {
      this.$api({
        method: "PUT",
        url: `tasks/${editData.id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        data: {
          title: editData.title,
          category: editData.category,
        }
      })
      .then((response) => {
        console.log(response)
        // atur page
        // 
        // fetch
        // this.getTasks()
      })
      .catch((err) => {
        next(err)
      })
    },

    // delete
    deleteTask(task) {
      this.$api({
        method: "DELETE",
        url: `/tasks/${task.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
      .then(response => {
        console.log(response)
        // atur page
        // 
        // fetch
        // this.getTasks()
      })
      .catch((err) => {
        next(err)
      })
    }
  },

  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
      this.getTasks()
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<style>
</style>