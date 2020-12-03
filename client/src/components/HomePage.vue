<template>
  <div>
    <Navbar
        @logout="signOut"
        @ChangePage="changePage"
    ></Navbar>
    <BoardList
        v-if="pageName === 'Home-page'"
        :tasks="tasks"
        :categories="categories"
    ></BoardList>
    <AddForm
        v-if="pageName === 'Add-form'"    
    ></AddForm>
  </div>
</template>

<script>
import AddForm from "./AddForm"
import Navbar from "./Navbar";
import BoardList from "./BoardList";

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