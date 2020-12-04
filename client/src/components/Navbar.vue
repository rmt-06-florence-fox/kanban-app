<template>
  <section class="navbar">
    <div class="left-nav">
      <img src="/assets/kanban.png" alt="kanban-logo" width="40px" />
    </div>
    <div
      class="center-nav"
    >
      <button 
      class="btn btn-form" 
      @click="addTaskPage"
      v-if="page !== 'Register Page' && page !== 'Login Page'"
      >
        <i class="far fa-plus-square"></i> Add Task
      </button>
    </div>
    <div
      class="right-nav"
    >
      <button 
      class="btn btn-form" 
      @click="logout"
      v-if="page !== 'Register Page' && page !== 'Login Page'"
      >
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['page'],
  methods: {
    addTaskPage(){
      this.$emit("addTask", "Add Task Page")
    },
    logout(){
      Swal.fire({
        title: 'Are you sure to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#16697a',
        cancelButtonColor: '#af3838',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.$emit("logout", "Login Page")
        }
      })
    }
  }
};
</script>