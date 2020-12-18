<template>
  <div>
    <Navbar @successLogout="successLogout" @refresh="refresh"></Navbar>
    <div class="container mt-4">
      <div class="row">
        <Category v-for="category in categories" :key="category.id"
                      :category="category"
                      :tasks="tasks"
                      @refresh="refresh"></Category>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar'
import Category from './category'

export default {
    name: 'homePage',
    data() {
      return {
        categories: ['backlog', 'todo', 'done', 'completed']
      }
    },
    components: {
        Navbar,
        Category
    },
    props: ['tasks'],
    methods: {
        successLogout() {
            this.$emit('successLogout')
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}
</script>

<style>

</style>