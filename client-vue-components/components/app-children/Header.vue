<template>
    <div>
        <header class="min-vw-100 bg-dark row sticky-top">
            <div class="text-white col-md-10 col-12 m-auto">
                <h1>KANBAN</h1>
                <p>let's see how's your progress going</p>
            </div>
            <button class="btn-danger h-25 m-auto" @click="logoutBtn">LOG OUT</button>
        </header>
        <addTaskForm></addTaskForm>
    </div>
</template>

<script>
import AddTaskForm from "./header-children/AddTask"

export default {
    name : 'Header', 
    data (){
        return {

        }
    },
    methods : {
        logoutBtn() {
            //console.log('lewat header')
            //console.log(this)
            this.$emit('listenLogout')
        }
    },
    components : {
        AddTaskForm
    }
}
</script>

<style>

</style>