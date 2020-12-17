<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">My kanban</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 mr-2" @submit.prevent="switchPage('add')">
                    <button class="btn btn-primary my-2 my-sm-0" type="submit">add new task</button>
                </form>
                <form class="form-inline ml-20 my-2 my-lg-0" @submit.prevent="signOut">
                    <button class="btn btn-danger my-2 my-sm-0" type="submit">Sign out</button>
                </form>
            </div>
        </nav>
        <div class="boards-container">
            <Category v-for="(category,index) in categories" :key="index" :category="category" :kanban="kanban"
              @destroy='destroy'
              @goToEdit='goToEdit'
            >

            </Category>
    </section>
</template>

<script>
import Category from './Category'
import Card from "./Card"

export default {
    name: "HomePage",
    props: ["kanban"],
    data () {
        return {
            categories: ["backlog", "products", "development", "done"]
        }
    },
    computed:{ // bikin filter jadi ada 1 aja 
        filtered(payload){ // dibikin membawa parameter payload 
            const list = this.kanban.filter(item => item.progress === payload) // lalu, item.progress === payload
            return list
        }
        // filterProducts(){
        //     const list = this.kanban.filter(item => item.progress === "products")
        //     return list
        // },
        // filterDevelopment(){
        //     const list = this.kanban.filter(item => item.progress === "development")
        //     return list
        // },
        // filterDone(){
        //     const list = this.kanban.filter(item => item.progress === "done")
        //     return list
        // }
    },
    methods: {
        signOut(){
            this.$emit("signOut")
        },
        switchPage(pageName){
            this.$emit('switchPage', pageName)
        },
        destroy (id) {
            console.log(id, "masuk ke homepage.vue")
            this.$emit('destroy', id)
        },
        goToEdit (payload) {
            this.$emit('goToEdit', payload)
            console.log(payload, 'ini di homepage')
        }
        // edit(id) {
        //     this.$emit('edit', id )
        // }
    },
    components: {
        Card,
        Category
    }
}
</script>

<style scoped>

.boards-container{
    display: flex;
    justify-content:center;
}

.boards-container-board{
    width: 500px;
}

</style>