<template>
    <div>
        <Navbar
        @logout="logout"
        ></Navbar>
        <Category 
        :tasks="tasks" 
        :categories="categories"
        @deleteTask="deleteTask"
        @addTask="addTask"
        @moveNext="moveNext"
        ></Category>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Category from './Category'

export default {
    name: "Dashboard",
    props: ["tasks", "categories"],
    components: {
        Navbar,
        Category
    },
    methods: {
        logout() {
            this.$emit("logout");
        },
        addTask(payload2){
            console.log('masuk dash')
            this.$emit("addTask",payload2)
        },
        deleteTask(id){
            this.$emit("deleteTask",id)
        },
        moveNext(data){
            this.$emit("moveNext",data)
        },
    }

}
</script>

<style>

</style>