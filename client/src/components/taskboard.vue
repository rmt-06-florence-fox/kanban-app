<template>
    <div class="papan">
        <div class="card" id="list-backlog" v-for="(category, index) in categories" :key="index" >
            <h3> {{category}} </h3>
            <div v-for="task in tasks" :key="task.id">
                <div v-if="task.category == category">
                    <h1> {{task.category}} </h1>
                    <taskitem @movetomain="edit" :task="task" > </taskitem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import taskitem from './taskitem.vue'
export default {
  components: { taskitem },
    name : 'taskboard',
    props : ['categories', 'tasks'],
    methods : {
        edit(payload){
            this.$emit('movetomain', payload)
        }
    }
}
</script>

<style scoped>
    .papan{
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
</style>