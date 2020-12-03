<template>
    <div  class="container-fluid card-deck">
        <div v-for="c in categories" :key="c.id" class="card bg-dark mt-3">
            <div class="card-header bg-dark text-white text-center mt-3">
                <h1> {{c.category}} </h1>
            </div>

            <div class="card-body w-100" :id="c.id"></div>
        </div>
    </div>
</template>

<script>

export default {
    name : "BoardList",
    data (){
        return {
            categories : [
                {category : "Back Log", id : "back-log"},
                {category : "To Do", id : "to-do"},
                {category : "Doing", id : "doing"},
                {category : "Done", id : "done"}
            ]
        }
    }
}
</script>

<style>
    #back-log{
        background: #f4ff61;
        overflow: auto;
    }

    #to-do{
        background: #a8ff3e;
        overflow: auto;
    }
    #doing{
        background: #6bfa47;
        overflow: auto;
    }
    #done{
        background: #15f10d;
        overflow: auto;
    }
</style>