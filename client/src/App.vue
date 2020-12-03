<template>
    <div>
        <login      v-if=" showPage == 'pg-login' "
                    @goTo="goTo" >
        </login>
        <register   v-if=" showPage == 'pg-register' "
                    @goTo="goTo">
        </register>
        <homepage   v-if=" showPage == 'pg-homepage' "></homepage>
        
    </div>
</template>

<script>
// import login from './components/login'
import login from './components/login.vue'
import register from './components/register.vue'
import homepage from './components/homepage.vue'

export default {
    name: 'App',
    data () {
        return {
            showPage: 'pg-login'
        }
    },
    components: {
        login,
        register,
        homepage
    },
    methods: {
        goTo (page) {
            this.showPage = page
        },
    },
    created: function () {
        if (localStorage.getItem('access_token')) {
            this.showPage = 'pg-homepage'
        } else {
            this.showPage = 'pg-login'
        }
    }
}
</script>

<style>

</style>