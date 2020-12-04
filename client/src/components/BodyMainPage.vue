<template>
  <div class="container-fluid" style="height: 93%">
    <div class="d-flex" style="height: 97%">
      
      <CardState v-for="(val,key) in tasks" :key="key" :tasks="val" :name="key" @showAdd="showAdd" @showEdit="showEdit"></CardState>
    </div>
    <!-- <div class="row d-flex">
        <div class="col-3 bg-dark">
      <draggable
            class="list-group kanban-column"
            :list="tasks.Done"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in tasks.Done" 
              :key="element.id"
            >
              {{ element.title }}
            </div>
          </draggable>

        </div>
        <div class="col-3 bg-success">

      <draggable
            class="list-group kanban-column"
            :list="tasks.Todo"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in tasks.Todo"
              :key="element.id"
            >
              {{ element.title }}
            </div>
          </draggable>
        </div>
      </div> -->
    <div>
      <b-modal id="addForm" hide-footer>
        <form @submit.prevent="addTask">
          <div class="form-group">
            <label >Title:</label>
            <input type="text" class="form-control" v-model="addTaskTitle">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </b-modal>
      <b-modal id="editForm" hide-footer>
        <form @submit.prevent="editTask">
          <div class="form-group">
            <label >State</label>
            <select v-model="editState" class="form-control">
              <option>Backlog</option>
              <option>Todo</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>
          <div class="form-group">
            <label >Title:</label>
            <input type="text" class="form-control" v-model="editTaskTitle">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
          <button class="btn btn-danger mt-3" @click="deleteTask">Delete</button>
      </b-modal>
    </div>
  </div>
</template>

<script>
const SERVER = 'https://kanban-alfa.herokuapp.com'
import CardState from "./CardState";
import axios from 'axios'
import draggable from "vuedraggable";
export default {
  props: ["tasks"],
  components: {
    CardState, draggable
  },
  data() {
    return {
      addTaskTitle: '',
      editTaskTitle:'',
      editTaskId: NaN,
      editState:'',
      state: '',
    };
  },
  methods:{
    showAdd(q){
      console.log('dari showadd');
      this.$bvModal.show('addForm')
      this.addTaskTitle = ''
      this.state = q
    },
    addTask(){
      axios({
        url: `${SERVER}/tasks`,
        method: 'POST',
        headers:{
          access_token : localStorage.getItem('access_token')
        },
        data:{
          state: this.state,
          title: this.addTaskTitle
        }
      })
      .then(({data})=>{
        this.$bvModal.hide('addForm')
        this.$emit('fetchUlang')
      })
      .catch(({response})=>{
        this.$bvModal.hide('addForm')
        this.$emit('fetchUlang')
      })
    },
    showEdit(obj){
      this.$bvModal.show('editForm')
      this.editTaskTitle = obj.title
      this.editTaskId = obj.id 
      this.editState = obj.state
    },
    editTask(){
      axios({
        url: `${SERVER}/tasks/${this.editTaskId}`,
        method: 'PUT',
        headers:{
          access_token: localStorage.getItem('access_token')
        },
        data:{
          state: this.editState,
          title: this.editTaskTitle
        }
      })
        .then(({data})=>{
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
        .catch(({response})=>{
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
    },
    deleteTask(){
      axios({
        url: `${SERVER}/tasks/${this.editTaskId}`,
        method: 'DELETE',
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({data})=>{
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
        .catch(({response})=>{
          this.$bvModal.hide('editForm')
          this.$emit('fetchUlang')
        })
    }
  }
};
</script>

<style>
</style>