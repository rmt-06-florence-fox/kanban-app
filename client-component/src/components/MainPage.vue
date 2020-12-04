<template>
    <div>
        <Navbar @changePage="changePage"></Navbar>
        <AddCategory @addCategory="addCategory"></AddCategory>
        <BoardList :tasks="tasks" :categories="categories" @addKanban="addKanban" @editKanban="editKanban" @deleteKanban="deleteKanban"></BoardList>
    </div>

</template>

<script>
import Navbar from "./Navbar"
import AddCategory from "./AddCategory"
import BoardList from "./BoardList"

export default {
    name: "MainPage",
    props: [ 'tasks', 'categories' ],
    data() {
        return {
            
        }
    },
    components: {
        Navbar,
        AddCategory,
        BoardList
    },
    methods: {
        changePage(page) {
            this.$emit("changePage", page)
        },
        addCategory(name) {
            this.$emit("addCategory", name)
        },
        addKanban(page, id) {
            this.$emit("addKanban", page, id)
        },
        editKanban(page, task) {
            this.$emit("editKanban", page, task)
        },
        deleteKanban(id) {
            this.$emit("deleteKanban", id)
        }
    }
}
</script>

<style>

</style>