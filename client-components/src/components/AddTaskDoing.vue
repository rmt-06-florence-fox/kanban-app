<template>
  <div>
    <a href="#" v-b-modal.doing><i class="fa fa-plus"> </i></a>
    <b-modal
      id="doing"
      ref="modal"
      title="Add Card"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState" label="Name" label-for="name-input">
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
</template>

<script>
import axios from "axios";

export default {
  props: ["category", "reloadTasks"],
  data() {
    return {
      name: "",
      nameState: null,
      title: "",
      titleState: null,
      //   ,
      //   category: this.category
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
    }
    ,
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      axios({
        method: "POST",
        url: "http://localhost:3000/tasks",
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
            this.$bvModal.hide("doing");
          });
        });
    },
  },
};
</script>

<style>
</style>