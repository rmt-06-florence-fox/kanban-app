<template>
   <div class="card">
      <!-- <header class="card-header">
      <p class="card-header-title">
         Component
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
         <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
         </span>
      </a>
      </header> -->
      <div class="card-content">
         <div class="content">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br> -->
            {{target.title}}
            <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
         </div>
      </div>
      <footer class="card-footer">
         <a @click="getDetail" href="#" class="card-footer-item">Detail</a>
         <a v-if='isAuthorized' @click='updateStatus' href="#" class="card-footer-item">Next</a>
      </footer>

     
   </div>
</template>

<script>
export default {
   name:'TaskItem',
   props:[
      'target'
   ],
   data(){
      return {
         isAuthorized: +localStorage.getItem('userId') === +this.target.UserId
      }
   },
   methods:{
      getDetail(){
         this.$emit('getDetail',this.target)
      },
      fetchTasks(){
         this.$emit('getTasks')
      },
      updateStatus(){
         console.log('updateStatus')
         this.$emit('updateStatus',this.target)
      }
   },
   created(){
      this.fetchTasks()
   }

}
</script>

<style>

</style>