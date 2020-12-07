<template>
  <div id="main">
    <navbar id="nav" class="fixed-top" @logout="logout"></navbar>
    <div id="main-section" class="d-flex flex-column">
      <div
        id="page-title"
        class="sticky-top container-fluid d-flex flex-wrap justify-content-center border-bottom border-dark mb-2"
      ></div>
      <div id="board-area" class="d-flex flex-wrap">
        <category-board
          v-for="(category, i) in tasks"
          :key="i"
          :category="i"
          :tasks="category"
          @addtask="addtask"
        >
        </category-board>
        <!-- Looping Category di sini -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import CategoryBoard from "./CategoryBoard.vue";

export default {
  name: "MainPage",
  props: ["tasks"],
  data() {
    return {
      cat: "",
    };
  },
  methods: {
    logout(page) {
      this.$emit("logout", page);
    },
    addtask(newTask) {
      this.$emit("addtask", newTask);
    },
  },
  components: {
    Navbar,
    CategoryBoard,
  },
  created() {},
};
</script>

<style>
#main {
  background: url("https://source.unsplash.com/P1qyEf1g0HU/1920x1080") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
#main-section {
  height: 200vh;
  text-align: center;
}
#page-title {
  background: rgb(0, 0, 0, 0.3);
  top: 56px;
}
#nav {
  z-index: 10;
}
#board-area {
  top: 100px;
  overflow: inherit;
}
</style>
