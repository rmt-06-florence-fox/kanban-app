<template>
  <div class="container mt-5" id="Dashboard">
    <!-- category -->
    <button @click="toAdd" type="button" class="btn btn-outline-dark">
      Add Task
    </button>
    <div class="row row-cols-md-4 mt-3">
      <Category
        v-for="(category, i) in category"
        :key="i"
        :category="category"
        :task="task"
        @editData="editData"
        @deleteData="deleteData"
      />
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";
export default {
  components: { Category },
  name: "Dashboard",
  props: ["category", "task"],

  methods: {
    toAdd() {
      this.$emit("changePage", "addtask");
    },
    deleteData(value) {
      this.$emit("deleteData", value);
    },
    editData(value) {
      this.$emit("editData", value);
    },
  },
};
</script>

<style>
</style>