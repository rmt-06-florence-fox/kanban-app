<template>
   <nav class="navbar">
        <div class="nav-left">
            <img src="https://ecs7.tokopedia.net/img/attachment/2019/9/19/76834886/76834886_2c026a7b-4080-4804-9bbd-6d8f72534a92.png" alt="logo" height="70">
        </div>
        <div class="nav-center">
            <h1 class="main-title">Welcome to Kanban App</h1>
        </div>
        <div class="nav-right">
            <button  type="submit" class="btn btn-danger"  @click="logout">logout</button>
            <!-- <ul class="nav-list" >
                <li ><a href="#"><i class="fa fa-toggle-right" style="font-size:24px" @click.prevent="logout" ></i></a></li>
            </ul> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    props: ['currentPage'],
    methods: {
        logout() {
            // console.log('logout udah');
            // localStorage.clear()
            this.$emit('logout')
        }
    }
}
</script>

<style>

</style>