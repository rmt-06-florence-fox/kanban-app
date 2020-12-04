<template>
   <nav class="navbar p-3" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
         <a class="navbar-item" href="#">
            <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
            <h4 class="title has-text-white">Kanban Awesome</h4>
         </a>
      
         <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a>
      </div>
   
      <div id="navbarBasicExample" class="navbar-menu">
         <div class="navbar-start">
            <a class="navbar-item is-size-5 has-text-white">
               Home
            </a>
            <a @click='loadAddTaskPage' class="navbar-item is-size-5 has-text-white">
               Add Task
            </a>
            <a @click='loadAddCatPage' class="navbar-item is-size-5 has-text-white">
               Add Category
            </a>
            
         
         </div>
      </div>
   
      <div class="navbar-end">
         <div class="navbar-item">
            <div class="buttons">
            <a @click.prevent="logout" class="button is-danger" id="logout-btn">
               Logout
            </a>
            </div>
         </div>
      </div>

      <div class="modal" :class="{'is-active':active}">
         <div class="modal-background"></div>
         <div class="modal-card">
            <header class="modal-card-head">
               <p class="modal-card-title">Add Task</p>
               <button @click='closeModal' class="delete" aria-label="close"></button>
            </header>
            <form @submit.prevent='addTask'>
               <section class="modal-card-body">
                  <!-- Content ... -->
               
                     <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                        <!-- <input  class="input" type="text" placeholder="e.g:Create Login Feature"> -->
                        <textarea v-model='addTitle' class="textarea" placeholder="e.g. Hello world"></textarea>
                        </div>
                     </div>

                     <div class="field">
                        <label class="label">Category</label>
                        <div class="control">
                        <div class="select">
                           <select v-model='addCategories'>
                              <option selected value="">Select Category</option>
                              <option v-for="(item) in categories" :key="item.id" :value="item.id">
                                 {{item.name}}
                              </option>
                           </select>
                        </div>
                        </div>
                     </div>
                     <!-- <button class="button is-link">Add Task</button>
                     <button @click='closeModal' class="button">Cancel</button> -->
               </section>
               <footer class="modal-card-foot">
                  <button class="button is-link">Add Task</button>
                  <button @click='closeModal' class="button is-danger">Cancel</button>
               </footer>
            </form>
         </div>
      </div>

       <div class="modal" :class="{'is-active':active2}">
         <div class="modal-background"></div>
         <div class="modal-card">
            <header class="modal-card-head">
               <p class="modal-card-title">Add Category</p>
               <button @click='closeModal' class="delete" aria-label="close"></button>
            </header>
            <form @submit.prevent='addCategory'>
               <section class="modal-card-body">
                  <!-- Content ... -->
               
                  <div class="field">
                     <label class="label">Title</label>
                     <div class="control">
                     <input v-model="addCatName" class="input" type="text" placeholder="New Category">
                     </div>
                  </div>

                     <!-- <button class="button is-link">Add Task</button>
                     <button @click='closeModal' class="button">Cancel</button> -->
               </section>
               <footer class="modal-card-foot">
                  <button class="button is-link">Add Category</button>
                  <button @click='closeModal' class="button is-danger">Cancel</button>
               </footer>
            </form>
         </div>
      </div>
      
   </nav>

</template>

<script>
export default {
   name:'Navbar',
   data(){
      return{
         active:false,
         active2:false,
         addTitle:"",
         addCategories:"",
         addCatName:""
      }
   },
   props:[
      'categories',
      'tasks'
   ],
   methods:{
      loadAddTaskPage(){
         this.active=true
      },
      loadAddCatPage(){
         this.active2=true
      },
      closeModal(){
         this.active=false
         this.active2=false
      },
      logout(){
         console.log('masuk logout')
         console.log('logout')
         localStorage.clear()
         console.log(gapi.auth2.getAuthInstance())
         var auth2 = gapi.auth2.getAuthInstance();
         console.log(auth2)
         auth2.signOut().then(function () {
            console.log('User signed out.');
         });
         this.$emit('getPage','landingPage')
      },
      addTask(){
         console.log('addTask');
         const data={
            title:this.addTitle,
            CategoryId:this.addCategories
         }
         this.closeModal()
         this.addTitle = ""
         this.addCategories=""
         this.$emit('addTask',data)
      },
      addCategory(){
         console.log('addCat');
         const data={
            name:this.addCatName
         }
         this.closeModal()
         this.addCatName=""
         this.$emit('addCat',data)
      }
   }

}
</script>

<style>

</style>