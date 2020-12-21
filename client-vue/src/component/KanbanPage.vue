<template>
  <div>
    <Navbar @logout="logoutKanban"></Navbar>
    <Dashboard
      @fetchDataKanban="fetchDataApp"
      :dataCard="dataCard"
      :dataCardById="dataCardById"
      @addData="addData"
      @deleteTask="deleteTask"
      @editTask="editTask"
      @getTaskById="getTaskById"
    ></Dashboard>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
export default {
  components: {
    Navbar,
    Dashboard,
  },
  props: ["dataCard", "dataCardById"],
  methods: {
    logoutKanban() {
      this.$emit("logoutKanban");
    },
    fetchDataApp() {
      this.$emit("fetchDataApp");
    },
    addData(payload) {
      this.$emit("addData", payload);
    },
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
    editTask(payload, id) {
      this.$emit("editTask", payload, id);
    },
    getTaskById(id) {
      this.$emit("getTaskById", id);
    },
  },
};
</script>

<style></style>
