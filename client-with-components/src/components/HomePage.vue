<template>
   <section>
         <!-- navbar -->
      <Navbar @addCat="addCat" @getPage='changePage' :categories='categories' @addTask='addTask'></Navbar>

      <div class="container mt-6">
         <div class="columns has-text-centered is-multiline">
            <TaskBoard 
               :tasks='tasks'
               v-for="(item) in categories" :key='item.id' 
               :category='item'
               @getDetail='getDetail'
               @updateStatus='updateStatus'
               >

            </TaskBoard>       
           
         </div>

         <div class="modal" :class="{'is-active':active}">
            <div class="modal-background"></div>
            <div class="modal-card">
               <header class="modal-card-head">
                  <p v-if="!editing" class="modal-card-title">Detail Task</p>
                  <p v-if="editing" class="modal-card-title">Edit Task</p>
                  <button @click='closeModal' class="delete" aria-label="close"></button>
               </header>
               <form action="" @submit.prevent="postEdit">
                  <section class="modal-card-body">
                     <!-- Content ... -->
                     <p v-if="!editing">{{targetTask.title}}</p>
                     
                     <div class="field" v-if="editing">
                        <label class="label">New Description</label>
                        <div class="control">
                           <textarea v-model="editTitle" name="" id="" cols="80" rows="5"></textarea>
                        </div>
                        <p class="help">This is a help text</p>
                     </div>

                     <div class="field" v-if="editing">
                        <label class="label">Category</label>
                        <div class="control">
                           <div class="select">
                              <select v-model='editCategories'>
                                 <option value="">Select Category</option>
                                 <option v-for="(item) in categories" :key="item.id" :value="item.id">
                                    {{item.name}}
                                 </option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </section>
                  <footer class="modal-card-foot">
                     <button v-if='editing' class="button is-link">Update</button>
                     <button @click.prevent='getEdit(targetTask)' v-if="!editing && isAuthorized" class="button is-link">Edit</button>
                     <button @click.prevent="destroy(targetTask.id)" v-if="!editing && isAuthorized" class="button is-danger">Delete</button>
                  </footer>
                     
               </form>
            </div>
         </div>
        
      </div>
   </section>
</template>

<script>

import Navbar from './Navbar'
import TaskBoard from './TaskBoard'

export default {
   name:"HomePage",
   data(){
      return {
         active:false,
         addTitle:"",
         addCategories:"",
         targetTask:[],
         editTitle:"",
         editCategories:"",
         editing:false,
         isAuthorized:false
      }
   },
   props:[
      'categories',
      'tasks'
   ],
   components:{
      Navbar,
      TaskBoard
   },
   methods:{
      addTask(data){
         console.log('addTask homepage');
         this.$emit('addTask',data)
         //this.fetchTasks();
      },
      addCat(data){
         console.log('addCat HomePage')
         this.$emit('addCat',data)
      },
      destroy(id){
         console.log('dlete')
         this.closeModal()
         this.$emit('destroy',id)
      },
      fetchCategories(){
         this.$emit('getCategories')
      },
      getEdit(data){
         this.editTitle=data.title
         this.editCategories=data.CategoryId
         this.editing=true
      },
      changePage(target){
         console.log('change page homepage')
         console.log(target)
         this.$emit('getPage',target)
      },
      fetchTasks(){
         this.$emit('getTasks')
      },
      closeModal(){
         console.log('close modal')
         this.active=false
      },
      getDetail(data){
         this.targetTask=data
         this.active=true
         this.isAuthorized = +localStorage.getItem('userId') === +data.UserId
      },
      postEdit(){
         const data={
            title:this.editTitle,
            CategoryId:this.editCategories
         }
         this.$emit('postEdit',{data,id:this.targetTask.id})
         this.closeModal()

      },
      updateStatus(target){
         let newStatus
         if(target.CategoryId !== this.categories.length){
            newStatus = target.CategoryId + 1
         }

         const data={
            CategoryId:newStatus
         }
         this.$emit('postEdit',{data,id:target.id})
         
      }
   },
   created(){
      this.fetchCategories()
      this.fetchTasks()
      console.log('render homepage')
   },
}
</script>

<style>

</style>