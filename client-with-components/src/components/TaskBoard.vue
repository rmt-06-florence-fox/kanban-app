<template>
   <div class="column is-3">
      <p class="subtitle p-3" :class='bgColor' id="backlog-card">{{category.name}}</p>
      <TaskItem @updateStatus='updateStatus' @getTasks='fetchTasks' @getDetail='getDetail' v-for="(item) in task" :key='item.id' :target='item'></TaskItem>
   </div>
</template>

<script>
import TaskItem from './TaskItem'
export default {
   name:'TaskBoard',
   props:[
      'category',
      'tasks'
   ],
   components:{
      TaskItem
   },
   methods:{
      fetchTasks(){
         this.$emit('getTasks')
      },
      getDetail(data){
         this.$emit('getDetail',data)
      },
      updateStatus(data){
         this.$emit('updateStatus',data)
      }
   },
   data(){
      return {
         active:false
      }
   },
   computed:{
      bgColor:function(){
         let bg = '';
         if(this.category.name==='backlog')
            bg='has-background-primary'
         else if(this.category.name ==='todo')
            bg='has-background-link'
         else if(this.category.name ==='doing')
            bg='has-background-info'
         else if(this.category.name ==='done')
            bg='has-background-success'

         return bg
      },
      task:function(){
         let filtered = this.tasks.filter(item => item.CategoryId === this.category.id)
         return filtered
      }
   },
   created(){
      //this.fetchTasks()
   }
}
</script>

<style>

</style>