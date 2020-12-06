<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img id="logo" src="https://www.freepnglogos.com/uploads/logo-mobile-legend-png/logo-mobile-legend-tcash-apapun-operatornya-semua-bisa-paketcash-18.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                </ul>
                
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout">Logout</button>
                
                
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("access_token")
            this.$emit('changePage', 'login')
        }
    }
}
</script>

<style>


</style>