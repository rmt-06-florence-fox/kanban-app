<template>
   <section>
      <div class="columns loginpage has-text-centered m-0">
         <div class="column is-align-self-center">

            <h1 class="title has-text-white">Kanban Awesome</h1>    
            <h1 class="title has-text-white">Login</h1>
            
            <form @submit.prevent='login'>
               <div class="field">
                  <p class="control has-icons-left has-icons-right">
                  <input v-model='user.email' class="input" type="email" placeholder="Email">
                  <span class="icon is-small is-left">
                     <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                     <i class="fas fa-check"></i>
                  </span>
                  </p>
               </div>
               <div class="field">
                  <p class="control has-icons-left">
                  <input v-model="user.password" class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                     <i class="fas fa-lock"></i>
                  </span>
                  </p>
               </div>
               <div class="field">
                  <p class="control">
                  <button class="button is-success">
                     Login
                  </button>
                  <button @click='changePage("landingPage")' class="button is-danger btn-back">
                     Cancel
                  </button>
                  </p>
                  <button style="margin-top:20px">
                     <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                  </button>
               </div>
            </form>
            
         </div>

         <div class="column img-login">
            <!-- <figure class="image">
               <img src="./assets/images/login.jpg" alt="" class="is-align-self-stretch">
            </figure> -->
         </div>
      </div>
   </section>

  
</template>

<script>

import GoogleLogin from 'vue-google-login';

export default {
   name:"loginpage",
   data(){
      return {
         user:{
            email:"",
            password:""
         },
         params: {
            client_id:"432825779164-qgaq96fgcqgr7vfnlstqjbf4ckjpau04"
         },
         renderParams: {
            width: 110,
            height: 35,
            longtitle: false,
            
         }
      }
   },
   methods:{
      login(){
         const data = {
            email:this.user.email,
            password:this.user.password
         }
         this.$emit('login',data)
      },
      loadLandingPage(){
         console.log('load landing page')
      },
      changePage(page){
         this.$emit("getPage",page)
      },
      onSuccess(googleUser){
         console.log('tes')
         const googleToken= googleUser.getAuthResponse().id_token
         this.$emit('googleLogin',googleToken)
      },
      onFailure(){
         console.log('test2')
      }
   },
   components:{
      GoogleLogin
   }

}
</script>

<style>

</style>