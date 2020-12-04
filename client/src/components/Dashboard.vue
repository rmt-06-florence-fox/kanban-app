<template>
    <div>
        <Navbar
        @logout="logout"
        ></Navbar>
        <Category 
        :tasks="tasks" 
        :categories="categories"
        @deleteTask="deleteTask"
        ></Category>
        <AddTask 
        @addTask="addTask"
        ></AddTask>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Category from './Category'
import AddTask from './AddTask'

export default {
    name: "Dashboard",
    props: ["tasks", "categories"],
    components: {
        Navbar,
        Category,
        AddTask
    },
    methods: {
        logout() {
            this.$emit("logout");
        },
        addTask(payload){
            this.$emit("addTask",payload)
        },
        deleteTask(id){
            this.$emit("deleteTask",id)
        }
    }

}
</script>

<style>

</style>