<template>
    <div>
        <!-- home page -->
        <Navbar @logout="signOut"></Navbar>
        <BoardList></BoardList>
    </div>
</template>

<script>
import Navbar from "./Navbar"
import BoardList from "./BoardList"

export default {
    name: "HomePage",
    components: {
        Navbar, BoardList
    },
    methods: {
        signOut() {
            this.$emit('logout')
        }
    }
}
</script>

<style>

</style>