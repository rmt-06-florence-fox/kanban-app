<template>
<div>
  <div id="list-kanban" class="container mt-4 mr-auto">
    <div class="row"> 
      <div class="col-md-3" v-for="category in category" 
      :key="category.id" >
        <div :class="category.name">{{category.name}} </div>
      
        <!-- <div class="card text-center mt-4">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <TaskCard > </TaskCard>

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