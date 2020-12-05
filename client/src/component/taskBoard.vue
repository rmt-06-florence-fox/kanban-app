<template>
    <!-- Task board -->
    <div class="col-md-3">
        <div class=" p-3 bg-primary text-white rounded shadow">
            <div>
                <h5 class="text-center"> {{category.name}}</h5>
            </div>
            <div>
                <taskItem v-for="data in filteredTask(category.name)" :key="data.id" :data="data" @deleteId='deleteData' @editId='editData'></taskItem>
            </div>
            <div class="rounded task-bottom mb-2"  id="btn-add">
                <a href="#" @click.prevent="showAdd(category.name)" class="btn btn-secondary">Add</a>
            </div>
        <!-- form Add -->
        </div>
            <formAdd class="add-tasks-page" v-if="pageAdd === category.name" :pageAdd="pageAdd" :category="category" @createTask="createTask"></formAdd>
    </div>
</template>

<script>
    import taskItem from './taskItem'
    import formAdd from './formAdd'
export default {
    name: 'taskBoard',
    data() {
        return {
            pageAdd: ''
        }
    },
    props: ["category", 'dataTasks'],
    components: {
        taskItem,
        formAdd
    },
    methods: {
        showAdd(category) {
            this.pageAdd = category
        },
        filteredTask(category) {
            return this.dataTasks.data.filter(e => e.category === category)
        },
        createTask(newData, value) {
            console.log('di taskboard');
            this.pageAdd = value
            this.$emit('createTask', newData)
        },
        deleteData(id) {
            console.log('di tasakboar');
            this.$emit('deleteId', id)
        }
    }
}
</script>

<style>
#btn-add {
    margin: 10px;
    display: flex;
    justify-content: center;
}
</style>