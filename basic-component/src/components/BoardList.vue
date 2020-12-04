<template>
    <div id="main-page">
        <h1 style="text-align: center; ">List Activity :)</h1>
        <div class="d-flex justify-content-around text-center mt-4">   
            <TaskBoard1 
            v-for="Category in Category"
            :key="Category.id"
            :Task="Task"
            :Category="Category"
            ></TaskBoard1>
        </div>    
    </div>
</template>

<script>
import axios from "axios"
import TaskBoard1 from "./TaskBoard1"



export default {
    name: "BoardList",
    props: ['Task', 'Category'],
    components: {
        TaskBoard1,
        // TaskBoard2,
        // TaskBoard3,
        // TaskBoard4,
    }
}
</script>


<style>

</style>