<template>
   <section>
      <div class="home-page">
         <div class="columns is-align-items-center is-align-content-center" >
            <div class="column has-text-centered is-align-self-center">
               <h1 class="title has-text-white">Kanban Awesome</h1>
               <a @click= 'changePage("registerPage")' class="button is-primary">
                  <strong>Sign up</strong>
               </a>
               <a @click='changePage("loginPage")' class="button is-light">
                  Log in
               </a>
            </div>
            <div class="column is-align-self-stretch" id="right-landing-page">
               <!-- <figure class="image" style="height: 100%;">
                  <img id="right-landingpage" src="./assets/images/login.jpg" alt="">
               </figure> -->
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name:'LandingPage',
   methods:{
      changePage(page){
         console.log('test');
         this.$emit('getPage',page)
      }
   }
}
</script>

<style>

</style>