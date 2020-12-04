<template>
  <div class="card col-md-3 h-100 bg-dark mt-2 mr-2 mb-2">
    <div class="row align-items-center justify-content-center">
        <h6 class="text-success text-center">{{name}}</h6><button @click="showAdd(name)" class="btn text-white mb-2">+</button>
    </div>
    <div class="container bg-white h-100 mb-2 rounded overflow-auto">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <CardTask v-for="(item,i) in tasks" :key="i" :task="item" @showEdit="showEdit"></CardTask>
        </div>
    </div>
  </div>
</template>

<script>
import CardTask from './CardTask'
export default {
    props:['tasks' , 'name'],
    components:{
        CardTask
    },
    data(){
        return{
            add: false
        }
    },
    methods:{
        showEdit(obj){
            this.$emit('showEdit' , obj)
        },
        showAdd(name){
            this.$emit('showAdd' , name)
        }
    }
}
</script>

<style>

</style>