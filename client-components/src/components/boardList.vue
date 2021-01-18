<template>
    <div  class="d-flex justify-content-around mainBoard">
        <taskBoard 
            :tasks= 'tasks' 
            @submitEdit = 'submitEdit'
            @addNewTask = "addNewTask"
            @destroying = 'destroying' 
            v-for="(category, index) in categories" :key= "index" 
            :categoryName = "category" :allCategories = 'categories'
            >
        </taskBoard>
    </div>

</template>

<script>
import taskBoard from './taskBoard'
import draggable from 'vuedraggable'

export default {
    name: 'boardList',
    data (){
        return {
            categories : [
                {
                name:'back-log',
                class: "text-white p-2 rounded font-weight-bold",
                style: "width: 310px; background-color: #595238",
                },
                {
                name:'To-Do',
                class: "text-dark p-2 rounded font-weight-bold",
                style: "width: 310px; background-color: #1dd3bd",
                },
                {
                name:'Doing',
                class: " text-dark p-2 rounded font-weight-bold",
                style: "width: 310px; background-color: #2bb2bb",
                },
                {
                name:'Done',
                class: "text-dark p-2 rounded font-weight-bold",
                style: "width: 310px; background-color: #87d4c5",
                }
                ]
        }
    },
    components: {
        taskBoard,
        draggable
    },
    methods:{
        addNewTask(payload){
            this.$emit('addNewTask', payload)
            // console.log(payload, ' from boardlist')
        },
        destroying(id){
            this.$emit('destroying', id)
        },
        submitEdit(payload, id){
            this.$emit('submitEdit', payload,id)
        }
    },
    props: ['tasks']

}
</script>

<style>

</style>