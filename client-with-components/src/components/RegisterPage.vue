<template>
   <section class="registerpage">
      <div class="columns has-text-centered m-0 ">
         <div class="column is-align-self-center">
            <h1 class="title is-2 has-text-white">Kanban Awesome</h1>
            <h1 class="title is-3 has-text-white">Register</h1>
            
            <div class="field">
               <p class="control has-icons-left has-icons-right">
               <input v-model="registerEmail" class="input" type="email" placeholder="Email">
               <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
               </span>
               <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
               </span>
               </p>
            </div>
            <form @submit.prevent='register' >
               <div class="field">
                  <p class="control has-icons-left">
                  <input v-model="registerPassword" class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                     <i class="fas fa-lock"></i>
                  </span>
                  </p>
               </div>
               <div class="field">
                  <p class="control">
                     <button class="button is-success">
                        Register
                     </button>
                     <button @click='changePage("landingPage")' class="button is-danger btn-back">
                        Cancel
                     </button>
                  </p>
               </div>
            </form>
         </div>

            <div class="column p-0 img-register">
               <!-- <figure class="image is-5by3">
                  <img src="./assets/images/register.jpg" alt="">
               </figure> -->
            </div>
      </div>

   </section>
</template>

<script>
export default {
   name:"RegisterPage",
   data(){
      return{
         registerEmail:"",
         registerPassword:"",
      }
   },

   methods:{
      changePage(page){
         this.$emit("getPage",page)
      },
      register(){
         console.log('registering')
         const data = {
            email:this.registerEmail,
            password:this.registerPassword
         }
         this.$emit('register',data)
      }
   }
}
</script>

<style>

</style>