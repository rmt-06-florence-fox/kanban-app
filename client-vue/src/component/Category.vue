<template>
  <div class="col s12 m3">
    <div class="light-blue category white-text">
      <div>{{ category }}</div>
      <div>
        <a href="#" :data-target="'modal-add-' + category" class="modal-trigger"
          ><i class="material-icons white-text">add</i></a
        >
      </div>
    </div>
    <Card
      v-for="task in taskByCategory"
      :key="task.id"
      :taskContent="task"
      @deleteTask="deleteTask"
      :category="category"
      @editTask="editTask"
      @getTaskById="getTaskById"
    ></Card>
    <!-- <AddTask :taskCategory="category"></AddTask> -->
    <div :id="'modal-add-' + category" class="modal">
      <div class="modal-content">
        <div class="row">
          <div class="col s12 center">
            <h3>Add Todo</h3>
          </div>
          <form @submit.prevent="addTask" class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input
                  value=""
                  :id="'add-title-' + category"
                  type="text"
                  class="validate"
                  v-model="addData.name"
                />
                <label :for="'add-title-' + category">Title</label>
              </div>
              <div class="input-field col s12">
                <input
                  value=""
                  :id="'add-description-' + category"
                  type="text"
                  class="validate"
                  v-model="addData.description"
                />
                <label :for="'add-description-' + category">Description</label>
              </div>
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <a href="#" class="modal-close waves-effect btn-flat">Close</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import AddTask from "./AddTask";
export default {
  data() {
    return {
      addData: {
        name: "",
        description: "",
      },
    };
  },
  props: ["category", "dataCard"],
  components: {
    Card,
    AddTask,
  },
  methods: {
    addTask() {
      console.log(this.addData.name, this.addData.description);
      const payload = {
        name: this.addData.name,
        description: this.addData.description,
        category: this.category,
      };
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
  computed: {
    taskByCategory() {
      return this.dataCard.filter((e) => e.category == this.category);
    },
  },
  mounted() {
    $(".modal").modal();
  },
};
</script>

<style></style>
