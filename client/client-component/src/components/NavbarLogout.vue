<template>
  <div class="custom-navbar">
                <div>
                    <img src="../../assets/Screenshot from 2020-12-02 08-34-34.jpg" alt="logo" width="115px">     
                </div>
                <div>
                    <ul class="right-navbar">
                        <li class="btn btn-danger"><a @click="logOut()" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
    name: "NavbarLogout",
    methods: {
        logOut() {
        this.$emit("logOut", "home-page")
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