<template>
  <div>
    <div class="navbar navbar-light">
      <div class="nav">
          <img src="../../assets/0b1424c1-f11c-46f7-a9c9-6bd21211dc5e_200x200.png" alt="logo" width="50">
      </div>
      <div class="nav">
          <button class="btn text-white" style="background-color: #5ec0ca;" @click=$emit('emitLogout')>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      message: 'Hello world',
    };
  },
};
</script>

<style scoped>
</style>