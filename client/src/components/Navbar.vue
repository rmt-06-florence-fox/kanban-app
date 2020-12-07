<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="d-flex flex-sm-row flex-column mr-4">
      <a class="navbar-brand" href="#">{{ loggedIn.name }}</a>
      <a href="#" class="d-flex align-items-center text-muted"
        >| {{ loggedIn.department }}</a
      >
    </div>
    <button
      class="navbar-toggler col-2"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <form class="form-inline mr-auto">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa fa-search"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search . . ."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>

      <button
        type="button"
        class="btn btn-outline-light d-flex align-items-center mt-lg-10 text-center"
        @click="logout"
      >
        Log Out
      </button>
    </div>
    <!-- Navbar content -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      loggedIn: {
        name: localStorage.getItem("name"),
        department: localStorage.getItem("department"),
      },
    };
  },
  methods: {
    logout() {
      this.$emit("logout", "login");
    },
  },
};
</script>

<style>
button {
  max-width: 90px;
}
</style>