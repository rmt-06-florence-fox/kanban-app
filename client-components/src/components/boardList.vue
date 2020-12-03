<template>
    <div  class="d-flex justify-content-around mainBoard">
        <taskBoard 
            :tasks= 'tasks' 
            @addNewTask = "addNewTask"
            @destroying = 'destroying' 
            v-for="(category, index) in categories" :key= "index" 
            :categoryName = "category"
            >
        </taskBoard>
    </div>

</template>

<script>
import taskBoard from './taskBoard'
export default {
    name: 'boardList',
    data (){
        return {
            categories : [
                {
                name:'back-log',
                class: "bg-dark text-white p-2 rounded font-weight-bold",
                style: "width: 310px;",
                },
                {
                name:'To-Do',
                class: "bg-warning text-dark p-2 rounded font-weight-bold",
                style: "width: 310px;",
                },
                {
                name:'Doing',
                class: "bg-primary text-warning p-2 rounded font-weight-bold",
                style: "width: 310px;",
                },
                {
                name:'Done',
                class: "bg-danger text-white p-2 rounded font-weight-bold",
                style: "width: 310px;",
                }
                ]
        }
    },
    components: {
        taskBoard
    },
    methods:{
        addNewTask(payload){
            this.$emit('addNewTask', payload)
            // console.log(payload, ' from boardlist')
        },
        destroying(id){
            this.$emit('destroying', id)
        }
    },
    props: ['tasks']

}
</script>

<style>

</style>