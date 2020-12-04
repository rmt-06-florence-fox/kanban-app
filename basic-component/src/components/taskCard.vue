<template>
<div>
    <div class="card border-success mb-3 shadow " style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success ">{{Task.name}}</div>
            <div class="card-body text-success">
                <h5 class="card-title"></h5>
                <p class="card-text">{{Task.description}}</p>
            </div>
        <div class="card-footer bg-transparent border-success">
            <ButtonBack v-if="Category !== 'Back-Log'"></ButtonBack>
            <ButtonDone v-if="Category !== 'Done'"></ButtonDone>
           <button class="btn-delete" style="font-size: 15px; border-radius: 15px; border: none; outline: none;">x</button>
        </div>
    </div>
</div>
    
</template>

<script>
import ButtonBack from "./ButtonBack"
import ButtonDone from "./ButtonDone"
import axios from 'axios'


export default {
    name: "TaskCard",
    props: [ 'Task', 'Category' ],
    components: {
        ButtonBack,
        ButtonDone
    },
    methods: {
        // dataCreator(data){
        //     console.log(data)
        //     axios({
        //         method: "GET",
        //         url: "http://localhost:3000/user",
        //         headers: {
        //             id: data
        //         }
        //     })
        //     .then((response) => {
        //        console.log(response)
        //     })
        //     .catch(error => {
        //         console.log("error.data")
        //     })
        // }
        
    },
    created(){
        // this.dataCreator()
    }
    
}
</script>

<style>

</style>