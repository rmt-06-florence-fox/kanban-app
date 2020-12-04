<template>
    <div id="main-page" >
        <navbar @movetohome="changePage()" @movetoadd="changePage()" @movetomain="changePage('home page')"> </navbar>
        
        <button class="btn btn-primary" @click="movetoadd"> Add Task </button>
        <div id="list" class="container">
            <taskboard :categories="categories"> </taskboard>
        </div>

    </div>
</template>

<script>
import navbar from './navbar.vue'
import Taskboard from './taskboard.vue'
export default {
  components: { navbar, Taskboard },
    name : 'main',
    props : ['categories'],
    methods : {
        movetoadd(){
            this.$emit('movetoadd', 'add task page')
        },
        changePage(page){
            this.page_name = page
        }
    }
}
</script>

<style>

</style>