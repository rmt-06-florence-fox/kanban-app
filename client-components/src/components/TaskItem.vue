<template>
  <div
    class="card p-3 m-3 mb-2 rounded bg-light text-black shadow text-left"
    style="width: 400px"
  >
    <div class="card-header">{{ task.name }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <div>
        <div>
          <!-- <b-button v-b-modal="task.id + ''">Launch demo modal</b-button> -->
          <a
            href="#"
            class="btn btn-primary"
            v-b-modal="task.id + ''"
            @click="populate(task)"
            >Update</a
          >
          <b-modal
            :id="task.id + ''"
            ref="modal"
            title="Add Card"
            @hidden="resetModal"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label="Name"
                label-for="name-input"
              >
                <b-form-input
                  id="name-input"
                  v-model="taskEdit.name"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                :state="titleState"
                label="Title"
                label-for="title-input"
                invalid-feedback="Name and Title is required"
              >
                <b-form-input
                  id="title-input"
                  v-model="taskEdit.title"
                  :state="titleState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <a href="#" class="btn btn-danger" @click="destroy(task.id)"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UpdateTask from "./UpdateTask";

export default {
  components: {
    UpdateTask,
  },
  props: ["task", "reloadTasks"],
  data() {
    return {
      name: "",
      nameState: null,
      title: "tes",
      titleState: null,
      judul: "tes2",
      taskEdit: {
        name: "",
        title: "",
        id:""
      },
      //   ,
      //   category: this.category
    };
  },
  watch: {
    // whenever question changes, this function will run
    task: function (newVal, oldVal) {
      console.log(newVal, "<<<<<<<");
      // this.title =
      // this.debouncedGetAnswer()
    },
  },
  methods: {
    populate(task) {
      console.log("di populate");
      console.log(task.title);
      this.taskEdit.title = task.title;
      this.name = task.name;
      this.taskEdit.name = task.name;
      this.taskEdit.id = task.id
      console.log(this.taskEdit);
    },
    destroy(id) {
      axios({
        method: "DELETE",
        url: "http://localhost:3000/tasks/" + id,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          this.reloadTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update(id) {},
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.titleState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
      this.title = "";
      this.titleState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleCancel() {
      console.log("gak jadi");
      this.resetModal();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      console.log(this.taskEdit.name, this.taskEdit.title, "<<<<");
      axios({
        method: "PUT",
        url: "http://localhost:3000/tasks" + taskEdit.id,
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: this.name,
          title: this.title,
          category: this.category,
          UserId: localStorage.UserId,
        },
      })
        .then((response) => {
        //   console.log(response);
          this.reloadTasks()
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.$nextTick(() => {
            this.$bvModal.hide("modal-prevent-closing");
          });
        });
    },
  },
  computed: {
    setTask() {
      this.title = this.task.title;
      console.log("masuk");
      return this.title;
    },
  },
};
</script>

<style>
</style>