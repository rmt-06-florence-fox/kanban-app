<template>
  <div :class="a" @click="showEdit" style="height:10vh;width:100%">
      <h6>{{task.title}}</h6>
  </div>
</template>

<script>
// class="card btn bg-success align-items-center justify-content-center mt-1"
export default {
    props:['task'],
    data (){
      return {
        a: [ 'card' , 'bg-success' , 'align-items-center' , ' justify-content-center' , 'mt-1' , 'btn'],
        active: true
      }
    },
    created(){
      if(localStorage.UserId != this.task.UserId){
        this.a = [ 'card' , 'bg-secondary' , 'align-items-center' , ' justify-content-center' , 'mt-1']
        this.active = false
      }
    },
    methods:{
      showEdit(){
        if(this.active)  this.$emit('showEdit',this.task)
      }
    }

}
</script>

<style>

</style>