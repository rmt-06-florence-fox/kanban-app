<template>
  <div class="container" id="kanban-page">
    <div class="row">
      <Category
        v-for="(categoryList, index) in categoryList"
        :key="index"
        :category="categoryList"
        :dataCard="dataCard"
        @addData="addData"
        @deleteTask="deleteTask"
        @editTask="editTask"
        @getTaskById="getTaskById"
      ></Category>
    </div>
  </div>
</template>

<script>
import Category from "./Category";
export default {
  data() {
    return {
      categoryList: ["Backlog", "Product", "Development", "Done"],
    };
  },
  props: ["dataCard"],
  components: {
    Category,
  },
  methods: {
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
  created() {
    this.$emit("fetchDataKanban");
  },
};
</script>

<style></style>
