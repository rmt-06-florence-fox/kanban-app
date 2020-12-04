<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Kanban!</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div>
    <!-- <a class="p-1" href="#" style="text-decoration: none"
      >Add Category<span class="sr-only">(current)</span></a
    > -->
     <a href="#" v-b-modal="'addCategory'" style="text-decoration: none"
                >Add Category</a>
              <b-modal
                id="addCategory"
                ref="modal"
                title="Add Category"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
                @cancel="handleCancel"
              >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <b-form-group
                    :state="categoryState"
                    label="Category"
                    label-for="category-input"
                  >
                    <b-form-input
                      id="category-input"
                      v-model="category"
                      :state="categoryState"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    :state="colorState"
                    label="Color"
                    label-for="color-input"
                    invalid-feedback="Category and Color is required"
                  >
                    <b-form-input
                      id="color-input"
                      v-model="color"
                      :state="colorState"
                      required
                    ></b-form-input>
                  </b-form-group>
                </form>
              </b-modal>
            <!-- </div> -->

    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"></li>
        <li class="nav-item active">
          <a href="#" @click="logout" style="text-decoration: none"
            ><GoogleLogin
              :params="params"
              :logoutButton="true"
              class="nav-link btn btn-danger p-1 w"
              style="color: black"
              >Logout</GoogleLogin
            ><span class="sr-only">(current)</span></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from "vue-google-login";
import axios from 'axios'

export default {
  name: "Navbar",
  props: ["reloadTasks"],
  components: {
    GoogleLogin,
  },
  data() {
    return {
      params: {
        client_id:
          "166375431684-efkve6dh1ehpk1ic1m0sd818as9bpf78.apps.googleusercontent.com",
      },
      category: "",
      categoryState: null,
      color:"",
      colorState: null
    };
  },
  methods: {
    logout() {
      console.log("di logout");
      // var auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(function () {
      //   console.log("User signed out.");
      // });
      localStorage.clear();
      this.$emit("changePage", "login");
    },
     checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.categoryState = valid;
      this.colorState = valid;
      return valid;
    },
    resetModal() {
      this.category = "";
      this.color = "";
      this.categoryState = null;
      this.colorState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      // Hide the modal manually
      let newCtgr = {
        name: this.category,
        color: this.color
      }
      console.log(newCtgr);
       axios({
        method: "POST",
        url: "https://kanban-server-apps.herokuapp.com/categories",
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: newCtgr.name,
          color: newCtgr.color
        }
      })
        .then((response) => {
          console.log('BERHASIL TAMBAH CATEGORY');
          this.reloadTasks()
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(()=>{
          this.$nextTick(() => {
            this.$bvModal.hide("addCategory");
          });
        })
    },
    handleCancel(){
        console.log('gak jadi');
        this.resetModal()
    }
  }
};
</script>
<style>
</style>