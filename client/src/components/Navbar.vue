<template>
  <div>
    <nav class="custom-navbar">
      <div class="ml-4">
        <img id="logo-kanban" src="../../assets/han-kanban-logo.png" alt="logo" type="submit" onclick="return confirm('Are you sure?')">
      </div>
      <div class="mr-4">
        <div class="right-navbar">
          <a href="#" class="btn-color-navbar btn btn-signup text-color ml-5" onclick="return confirm('Are you sure?')"><strong>Sign Up</strong></a>
          <a href="#" class="btn-color-navbar btn btn-signout text-color ml-5" onclick="return confirm('Are you sure?')"><strong>Sign Out</strong></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  
}
</script>

<style>

</style>