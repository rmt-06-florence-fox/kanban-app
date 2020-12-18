<template>
<div>
  <div id="list-kanban" class="container mt-4 mr-auto">
    <div class="row"> 
      <div class="col-md-3" >
       <TaskCard v-for="category in category" :key="category.id" > 
        <div :class="category.name">{{category.name}} </div></TaskCard>
      
        
    </div>
  </div>

</div>


</template>

<script>



import TaskCard from './TaskCard.vue';

export default {
  name: "Task",
  props: ['tasks'],
  data() {
    return {
    
    };
  },
  components:{
    TaskCard
  },
 methods: {
  userLogout(){
        this.$emit('userLogout')
      },
 }
};
</script>

<style scoped>
</style>