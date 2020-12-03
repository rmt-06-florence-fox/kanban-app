<template>
    <h1>ini halaman</h1>
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
        background: #32ff6a;
        overflow: auto;
    }
    #done{
        background: #27aa80;
        overflow: auto;
    }
</style>