<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: lightskyblue;">
        <a class="navbar-brand" href="#">Kanban</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Swal from 'sweetalert2'

    export default {
        name: 'Navbar',
        data() {
            return {
            }
        },
        methods: {
            logout() {
                localStorage.clear()

                var auth2 = gapi.auth2.getAuthInstance();
                if (auth2) {
                    auth2.signOut().then(function () {
                        console.log('User signed out.');
                    });
                }

                Swal.fire({
                    title: 'Logout',
                    text: `You've been logout successfully!`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                this.$emit('movePage', 'loginPage')
            }
        }
    }
</script>

<style>

</style>