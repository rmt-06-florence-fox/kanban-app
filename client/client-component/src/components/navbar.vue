<template>
    <div>
        <div class="custom-navbar">
            <div>
                <img src="../../assets/Screenshot from 2020-12-02 08-34-34.jpg" alt="logo" width="115px">
                
            </div>
            <div>
                <ul class="center-navbar">
                    <li><a @click="changePage('home-page')" href="#">Home</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div>
                <ul class="right-navbar">
                    <li class="btn btn-outline-primary"><a @click.prevent="changePage('form-login')" href="#">Login</a></li>
                    <li class="btn btn-info"><a @click="changePage('form-register')" href="#">Register</a></li>
                </ul>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
    name: "Navbar",
    methods: {
        changePage(page) {
            this.$emit("changePage", page)
            // console.log(page, "ini dari navbar")
        }
    }
}
</script>

<style>
    .navbar{
        display: flex;
    }

    .custom-navbar {
        background-color: #16a085;
        color: white;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .center-navbar {
        display: flex;
        list-style: none;
        justify-content: center;
        height: 90%;
    }

    .center-navbar li {
        margin: 10px;
    }

    .center-navbar a {
        color: white;
        text-decoration: none;
        margin: 10px;
    }

    .right-navbar {
        display: flex;
        list-style: none;
        margin: 0%;
        padding: 0%;
    }

    .right-navbar a {       
        color: white;
        padding: 10px;
    }

    .right-navbar li {
        margin: 8px;
    }
</style>