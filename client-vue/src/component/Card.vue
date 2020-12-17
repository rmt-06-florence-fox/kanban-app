<template>
  <div class="card blue-grey lighten-1">
    <div class="card-content white-text">
      <span class="card-title">{{ taskContent.name }}</span>
      <p>{{ taskContent.description }}</p>
    </div>
    <div class="card-action white-text">
      <a
        href="#"
        @click="getTaskById"
        :data-target="'modal-edit-' + category"
        class="modal-trigger"
      >
        <i class="material-icons">edit</i></a
      >
      <a href="#" @click="deleteTask"><i class="material-icons">delete</i></a>
      <div :id="'modal-edit-' + category" class="modal">
        <div class="modal-content">
          <div class="row">
            <div class="col s12 center">
              <h3 class="black-text">Edit Todo</h3>
            </div>
            <form @submit.prevent="editTask" class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    value=""
                    :id="'edit-title-' + category"
                    type="text"
                    class="validate"
                    v-model="edit.name"
                  />
                  <label :for="'edit-title-' + category">Title</label>
                </div>
                <div class="input-field col s12">
                  <input
                    value=""
                    :id="'edit-description-' + category"
                    type="text"
                    class="validate"
                    v-model="edit.description"
                  />
                  <label :for="'add-description-' + category"
                    >Description</label
                  >
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
            <a href="#" class="modal-close waves-effect btn-flat black-text"
              >Close</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "taskContent", "dataCardById"],
  data() {
    return {
      editData: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.taskContent.id);
    },
    editTask() {
      this.$emit("editTask", this.edit, this.taskContent.id);
    },
    getTaskById() {
      this.$emit("getTaskById", this.taskContent.id);
    },
  },
  computed: {
    edit() {
      return this.dataCardById;
    },
  },
  mounted() {
    $(".modal").modal();
  },
};
</script>

<style></style>
