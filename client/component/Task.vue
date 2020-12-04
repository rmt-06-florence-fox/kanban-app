<template>
  <div id="Task">
    <div class="card text-center mt-3">
      <div class="card-header">
        <h5 class="card-title">{{ task.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ task.description }}</p>
        <a 
          @click="showEditForm"
          class="btn btn-outline-dark">Edit</a>
        <a 
          @click="deleteData" 
          class="btn btn-outline-dark">Delete</a>
      </div>
      <div class="card-footer text-muted">
        {{ task.updatedAt.split("T")[0] }}
      </div>
    </div>
    <div v-if="showForm" class="card-body">
      <h4>Edit form</h4>
      <form @submit.prevent="editData()">
        <div class="form-group">
          <label for="title">Title</label>
          <input v-model="title" id="title" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label for="tag">Description</label>
          <input
            v-model="description"
            id="description"
            class="form-control"
            type="text"
          />
        </div>
        <button type="submit" class="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task", "category"],
  data() {
    return {
      showForm: false,
      title: this.task.title,
      description: this.task.description,
    };
  },
  methods: {
    deleteData() {
      const value = {
        taskId: this.task.id,
      };
      this.$emit("deleteData", value);
    },
    showEditForm() {
      if (this.showForm === false) {
        this.showForm = true;
      } else {
        this.showForm = false;
      }
    },
    editData() {
      const value = {
        id: this.task.id,
        title: this.title,
        description: this.description,
      };
      this.showForm = false;
      this.$emit("editData", value);
    },
    clearForm() {

    }

  },
};
</script>

<style>
</style>