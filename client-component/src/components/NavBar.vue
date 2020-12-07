<template>
  <div>
    <nav class="navbar navbar-light bg-light fixed-top">
      <div>
        <button type="button" @click="changePage('main-page')" class="navbar-brand rounded">
            <img src="../assets/kanban-logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""
                loading="lazy">
            Kanban
        </button>
        <button @click="changePage('main-page')" type="button" class="btn btn-light home-btn">Home</button>
      </div>
      <!-- <div class="form-group search-container">
        <select v-model="key.by" class="form-control search-by" name="search-by">
          <option selected>Name</option>
          <option>Title</option>
          <option>Due</option>
        </select>
        <input v-model="key.words" class="form-control search border-light" type="text" placeholder="search ...">
         <button type="button" class="btn-warning rounded" @click="search">GO</button>
      </div> -->
      <div id="right-btn-container">
        <button @click="$emit('show-add-category-form')" type="button" class="btn btn-light ml-auto btn-add-category">Add Category</button>
        <button @click="logout" type="button" class="btn btn-light" id="btn-logout">Log out</button>
      </div>
    </nav>
  </div>
</template>
<script>
import Vue from 'vue';
import { LoaderPlugin } from 'vue-google-login';

Vue.use(LoaderPlugin, {
  client_id: "861795519447-99qjkijf9agup0r284t2mp7g3g7uu4d0.apps.googleusercontent.com"
});

export default {
  name: "NavBar",
  data() {
    return {
      key: {
        by: "",
        words: ""
      }
    }
  },
  methods: {
    changePage(pageName) {
      this.$emit("changePage", pageName);
    },
    logout() {
      this.changePage("login-page");
      localStorage.clear();

      Vue.GoogleAuth.then(auth2 => {
        auth2.signOut().then(function() {
          console.log('User signed out.');
        });
      });
    },
    search() {
      console.log(this.key);
      this.$emit("setKey", this.key);
    }
  }
}
</script>
<style>
  
</style>