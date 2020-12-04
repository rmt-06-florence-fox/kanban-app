<template>
  <div>
    <Navbar></Navbar>
    <div class="container bg-dark">
      <h1 class="text-white">Hello from Vue</h1>
    </div>
    <Home></Home>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Home from './components/Home';

export default {
    components: {
        Navbar,
        Home
    }
};
</script>

<style>
</style>