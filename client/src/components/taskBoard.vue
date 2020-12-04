<template>
  <div class="container" style="padding-top: 15px">
  <div class="row">
    <div class="col-sm" style="background-color:#2a9d8f; text-align:center" v-for="item in rowArray " :key="item.id"> 
     <h5><strong>{{item}}</strong></h5>
     <div style="background-color: #e9c46a; margin-bottom: 10px" v-for="data in datas" :key="data.id">
        <Card  v-if="data.category === item" :dataToChild="data" @keDashboard="backtodashboard"></Card> 
     </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Card from './taskCard'

export default {
    name : 'Board',
    components : {
      Card
    },
    data () {
        return {
            rowArray : ["Backlog", "Todo", "Done", "Completed"],
            datas: []
        }
    },
    methods : {
        backtodashboard () {
            this.$emit("backDashboard")
        }
    },
    created: function() {
      axios ({
          method : 'GET',
          url : 'http://localhost:3000/tasks',
          headers : {
            token : localStorage.getItem('token')
          }
        })
        .then (response => {
          console.log ('berhasil get data')
          this.datas = response.data
        })
        .catch (err => {
          console.log(err)
        })
    }
}
</script>

<style>

</style>