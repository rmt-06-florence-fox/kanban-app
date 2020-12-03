<template>
  <div>
    <Navbar
        @logout="signOut"
        @ChangePage="changePage"
    ></Navbar>
    <AddForm
        v-if="pageName === 'Add-form'"
    ></AddForm>
    <BoardList
        v-if="pageName === 'Home-page'"
        :tasks="tasks"
        :categories="categories"
    ></BoardList>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import BoardList from "./BoardList";
import AddForm from "./AddForm";

export default {
  name: "HomePage",
  props: [ 'tasks','categories','pageName' ],

    components: {
        Navbar,
        BoardList,
        AddForm
    },
    methods: {
        signOut() {
          this.$emit("logout");
        },
        changePage (page) {
            this.$emit('changePage', page)
        }
    },
};
</script>

<style>
</style>