<template>
  <div class="col-sm-3">
    <div class="p-3 bg-warning text-dark rounded">
      <h6>{{ category.category }}</h6>
      <Task
        @editData="editData"
        @deleteData="deleteData"
        :task="task"
        v-for="(task, i) in taskCategory"
        :key="i"
        :category="category"
        :id="task.id"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task";
import draggable from "vuedraggable";

export default {
  name: "Category",
  props: ["category", "task"],
  data() {
    return {
      currentId: null,
      currentCategory: null,
    };
  },
  components: {
    Task,
    draggable,
  },
  computed: {
    taskCategory() {
      return this.task.filter((el) => {
        return el.category == this.category.category;
      });
    },
  },
  methods: {
    deleteData(value) {
      this.$emit("deleteData", value);
    },
    editData(value) {
      console.log(value);
      this.$emit("editData", value);
    },
    updateCategory() {
      const payload = {
        id: this.currentId,
        category: this.currentCategory,
      };
      this.$emit("updateCategory", payload);
    },
    onMove(event) {
      this.currentId = event.draggedContext.element.id;
      this.currentCategory =
        event.relatedContext.component.$attrs.category.category;
      // console.log(event.draggedContext.element.id)
      // console.log(event.relatedContext.component.$attrs.category.category);
    },
  },
};
</script>

<style>
</style>