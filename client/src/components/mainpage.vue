<template>
    <div id="main-page" >
        <navbar @movetomain="movetomain" @movetoadd="movetoadd"> </navbar>
        
        <button class="btn btn-primary" @click="movetoadd"> Add Task </button>
        <div id="list" class="container">
            <taskboard :categories="categories" :tasks="tasks" @movetomain="movetoedit"> </taskboard>
        </div>

    </div>
</template>

<script>
import navbar from './navbar.vue'
import Taskboard from './taskboard.vue'
export default {
  components: { navbar, Taskboard },
    name : 'main',
    props : ['categories', 'tasks'],
    methods : {
        movetoadd(){
            this.$emit('movetoadd', 'add task page')
        },
        movetoedit(payload){
            this.$emit('movetoedit', payload)
        },
        movetomain(){
            this.$emit('movetomain', 'main page')
        }
    }
}
</script>

<style>
    button {
        padding: 14px 40px;
    }
</style>