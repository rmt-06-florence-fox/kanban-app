<template>
  <div>
    <Navbar @logout="signOut"></Navbar>
    <BoardList
        :tasks="tasks"
        :categories="categories"
    ></BoardList>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import BoardList from "./BoardList";

export default {
  name: "HomePage",
  props: [ 'tasks','categories' ],

    components: {
        Navbar,
        BoardList,
    },
    methods: {
        signOut() {
            this.$emit("logout");
        },
    },
};
</script>

<style>
</style>