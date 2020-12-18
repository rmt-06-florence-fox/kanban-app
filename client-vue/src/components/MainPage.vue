<template> 
<div>
    <NavBar @logout="logout"></NavBar>
    <TaskBoard :categories="categories" :listCategories="listCategories" @deleteTaskDong="tes" @addnewTask="addnewTask" @addnewCategory="addnewCategory" @deleteCategory="deleteCategory" @editTask="editTask"></TaskBoard>
</div>
</template>

<script>
    import TaskBoard from './TaskBoard'
    import NavBar from './NavBar'
    export default {
        name: "MainPage",
        props: ['categories', 'listCategories'],
        components: {
            TaskBoard,
            NavBar
        },
        methods:{
            tes(id){
                console.log('test dari MainPage', id)
                this.$emit("deleteTask", id)
            },
            addnewTask(id, name){
                console.log(`MASUK DI MAIN PAGE`, id, name)
                this.$emit("addnewTask", id, name)
            },
            addnewCategory(name){
                console.log('MASUK DI MAIN PAGE', name)
                this.$emit("addnewCategory", name)
            },
            deleteCategory(id){
                this.$emit("deleteCategory", id)
            },
            editTask(editId, editName, editCategoryId){
                this.$emit("editTask", editId, editName, editCategoryId)
            },
            logout(){
                this.$emit("logout")
            }
        }
    }
</script>

<style>

</style>