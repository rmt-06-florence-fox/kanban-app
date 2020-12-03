<template>
  <section class="hero is-fullheight">
    <Navbar
      :changeStatus="changeIsLogin"
      :isLogin="isLogin"
      :hasAcc="hasAcc"
      :hasAccount="hasAccount"
    ></Navbar>
    <LandingPage 
      :changeStatus="changeIsLogin"
      v-if="!isLogin"
      :hasAcc="hasAcc"
      :hasAccount="hasAccount"
    ></LandingPage>
    <DashboardPage v-if="isLogin"></DashboardPage>
    <Footer></Footer>
</section>
</template>


<script>
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import DashboardPage from "./components/DashboardPage"
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    LandingPage,
    DashboardPage,
    Footer,
  },

  data() {
    return {
      isLogin: false,
      hasAccount: true,
    }
  },

  methods: {
    changeIsLogin(value) {
      this.isLogin = value;
    },
    hasAcc(value) {
      this.hasAccount = value;
    }
  },

  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
};
</script>

<style>
</style>