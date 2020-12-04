<template>
  <div class="container-fluid" style="height:100vh;background-image: url(https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/45/2019/11/MS_Penguin-Counting-Story_1900x800.jpg)">
    <Nav2 @logout="logout"></Nav2>
    <BodyMainPage :tasks="tasks" @fetchUlang="fetchUlang"></BodyMainPage>
  </div>
</template>

<script>
import Nav2 from './Nav2'
import BodyMainPage from './BodyMainPage'
export default {
  props:['tasks'],
  components:{
    Nav2,
    BodyMainPage
  },
  methods:{
    logout(){
      this.$emit('logout')
    },
    fetchUlang(){
      this.$emit('fetchUlang')
    }
  },
  created(){
    this.$emit('bukaMain')
  }
}
</script>

<style>

</style>