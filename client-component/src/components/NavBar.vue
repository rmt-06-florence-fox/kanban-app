<template>
  <div>
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="navbar-left">
        <button type="button" @click="changePage('main-page')" class="navbar-brand rounded">
            <img src="../assets/kanban-logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""
                loading="lazy">
            Kanban
        </button>
        <button @click="changePage('main-page')" type="button" class="btn btn-light home-btn">Home</button>
      </div>
      <div class="form-group search-container">
        <select v-model="searchKey.by" class="form-control search-by" name="search-by">
          <option value="name" selected>Name</option>
          <option value="title">Title</option>
          <option value="due">Due</option>
        </select>
        <input v-model="searchKey.words" @keyup="filterSearch" class="form-control search border-light" type="text" placeholder="search ...">
      </div>
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
      searchKey: {
        by: "name",
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
    filterSearch() {
      if (this.searchKey.words !== "") {
         this.$emit("setSearchKey", this.searchKey);
      }
    }
  }
}
</script>
<style>
  
</style>