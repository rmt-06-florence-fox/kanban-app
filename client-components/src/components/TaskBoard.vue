<template>
  <div>
    <div class="overflow-auto mt-2">
      <div class="col-sm text-center">
        <div
          style="width: 400px"
          class="p-3 m-3 mb-2 rounded text-white"
          :style="'background:' + category.color"
        >
          <div class="d-flex justify-content-between">
            <p></p>
            <h6>{{ category.name }}</h6>
            <!-- modal -->
            <!-- <AddTaskBacklog category="backlog" :reloadTasks="reloadTasks"></AddTaskBacklog> -->
            <div>
              <a href="#" v-b-modal="category.name+''" @click="cat(category.name)"
                ><i class="fa fa-plus"> </i
              ></a>
              <b-modal
                :id="category.name+''"
                ref="modal"
                title="Add Card"
                @show="resetModal"
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
                      v-model="name"
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
                      v-model="title"
                      :state="titleState"
                      required
                    ></b-form-input>
                  </b-form-group>
                </form>
              </b-modal>
            </div>
          </div>
        </div>
        <div v-for="task in dataTasks.data" :key="task.id">
          <TaskItem
            :reloadTasks="reloadTasks"
            v-if="task.category == category.name"
            :task="task"
          ></TaskItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import axios from 'axios'
export default {
  props: ["dataTasks", "reloadTasks", "category"],
    components: {
      TaskItem
    },
  data() {
    return {
      name: "",
      nameState: null,
      title: "",
      titleState: null,
      categoryList: ""
    };
  },
  methods: {
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
    handleCancel(){
        console.log('gak jadi');
        this.resetModal()
    },
    cat(categoryName){
      console.log(categoryName);
      this.categoryList = categoryName
    }
    ,
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      console.log(this.name, this.title, this.categoryList, '<<<');
      axios({
        method: "POST",
        url: "https://kanban-server-apps.herokuapp.com/tasks",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: this.name,
          title: this.title,
          category: this.categoryList,
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
            this.$bvModal.hide(this.categoryList);
          });
        });
    },
  },
};
</script>

<style>
</style>