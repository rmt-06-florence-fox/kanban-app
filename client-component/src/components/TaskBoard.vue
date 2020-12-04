<template>
    <div class="col-md-3 col-sm-6 mt-3"> 
        <!-- dijadiin task board -->
        <div class="p-3 bg-primary text-white rounded text-center">
            {{ category.name }}
        </div>
        <!-- v-for taruh di tasklist sama seperti task board -->
        <TaskItem 
            v-for="data in filterTask" :key="data.id"
            :listData='data'
            @edit='edit'
            @deleteId='deleteId'
            @patchLeft='patchLeft'
            @patchRight='patchRight'
        ></TaskItem>
    </div>
</template>

<script>
import TaskItem from "./TaskItem"
import axios from "axios"
export default {
    name: 'TaskBoard',
    props: ['category', 'listTask'],
    methods: {
        
        edit(data){
            this.$emit('edit', data)
        },
        deleteId(data){
            this.$emit('deleteId', data)
        },
        patchLeft(data){
            this.$emit('patchLeft', data)
        },
        patchRight(data){
            this.$emit('patchRight', data)
        }
    },
    components: {
        TaskItem
    },
    computed: {
        filterTask: function(){
            console.log(this.category)
            return this.listTask.filter(task => task.category == this.category.name)
        }
    }
}
</script>

<style>

</style>