<template>
  <div>
      <Nav @addForm="addform" @logout="logout"></Nav>
      <Board v-if="changePage === 'dashboard'" @backDashboard="backtodashboard"></Board>
      <AddForm @backDashboard="backtodashboard" v-if="changePage === 'addForm'"></AddForm>
  </div>
</template>

<script>
import Nav from './navigation'
import AddForm from './AddForm'
import PatchForm from './PatchForm'
import PutForm from './PutForm'
import Board from './taskBoard'

export default {
    name : 'Dashboard',
    components: { 
       Nav,
       AddForm,
       PatchForm,
       PutForm,
       Board
    },
    data () {
        return {
            changePage :''
        }
    },
    methods : {
      addform() {
        this.changePage='addForm'
      },
      logout () {
        localStorage.clear()
        this.$emit("logout")
      },
      backtodashboard () {
        this.changePage='dashboard'
      }
    },
    created: function() {
        this.changePage='dashboard'
    }
}
</script>

<style>

</style>