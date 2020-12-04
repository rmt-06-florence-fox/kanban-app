<template>
    <div>
        <Navbar 
            @loggingOut="loggingOut"
            @toHome="showHome"
            @addNewTask="addNewTask"
        ></Navbar>
        <div>
        </div>
        <BoardList
            @updateTask="updateTask"
            @deleteTask="deleteTask"
            :dataTask="dataTask"
        ></BoardList>
    </div>
</template>

<script>
import Navbar from "./Navbar"
import axios from "axios"
import BoardList from "./BoardList"

export default {
    name: "MainPage",
    props: ['dataTask'],
    data() {
        return{
            name: "Main Page",
            currentPage: "home"
        }
    },
    components: {
        Navbar,
        BoardList,
    },
    methods: {
        loggingOut(page) {
            this.$emit('changeCurrentPage', page)
        },
        showHome(page) {
            this.$emit('changeCurrentPage', page)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        addNewTask(title, category) {
            this.$emit('addNewTask', title, category)
        },
        updateTask(title, category, id) {
            this.$emit('updateTask', title, category, id)
        }
    },
}
</script>

<style>

</style>