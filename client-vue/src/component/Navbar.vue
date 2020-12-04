<template>
  <nav>
    <div class="nav-wrapper cyan darken-2">
      <a href="#" class="brand-logo center">Kanban</a>
      <ul id="nav-mobile" class="right">
        <li>
          <a class="waves-effect waves-light btn red lighten-1" @click="logout"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style></style>
