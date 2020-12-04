import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount("#app")


{/* <div class="container-fluid">
<div class="row">

    <div class="col-lg-3 col-md-6 col-sm-6 mt-2 pt-5 rounded">
        <div class="card-header bg-danger text-white text-center">Backlog</div>
        <div class="card-body bg-white rounded mt-3 shadow mb-2" v-for="task in tasks" :key="task.id">
            <h5 class="card-title d-flex justify-content-between">
                <div><strong>{{task.title}}</strong></div>
                <div class="btn-toolbar">
                    <div><button class="btn btn-primary mr-1 btn-sm"><i class="fa fa-pencil"></i></button></div>
                    <div><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></div>
                </div>
            </h5>
        </div>
    </div>

</div>
</div> */}