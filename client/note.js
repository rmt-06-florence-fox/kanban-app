add CDN



var app = new Vue({
    el: '#app',
    data: {
        reversedMessage: ""
        name: "<p>Rudy</p>",
        pageName: "Home Page",
        counter: 0,
        message: "",
        errorMessage: "userName required",
        invalid:false,
        ranger ="",
        userName ="",
        rangers: [],
        user: {
            email: "",
            password: ""
        }
    },
    methods: {
        nambahCounter(){
            this.counter++;
        },
        resetCounter(){
            this.counter=0;
        },
        changePage(pageName){
            this.pageName = pageName
        },
        login() {
           if(this.message === "") {
               this.invalid = true;
           } else if (this.message !== "") {
               this.pageName = "Home Page";
               this.fetchRangers();
           }


        },
        getOneRanger(ranger) {
            this.pageName = "Ranger Detail"
            this.ranger = ranger
        },
        fetchRangers(){
            axios({
                url: "",
                method: "",
                headers: {

                }
            })
            .then((response) => {
                this.rangers = response.data

            })
            .catch((err) => {

            })
        }
    },
    beforeCreate: function () {
        
    },
    created:() {
        if (localStorage.getItem("access_token")) {
            this.pageName = "main-page";
            this.fetchRangers();
        } else {
            this.pageName = "login-page"
        }
    },
    mounted:() {
        
    },
    computed: {
        reversedMessage: function (){
            return this.message.split("").reverse().join("");
        },
        filteredRangers: function() {
            return this.rangers.filter(ranger => {
                return ranger.name.uncludes(this.message)
            })
        }
    },
    watch: {
        message: function(val) {
            this.reversedMessage = this.message.split...
        } 
    }
})

axios({
    url:
    method:
    data: this.user

})
.then(response => {
    localStorage.setItem()
    
})
.catch((err) => {

})
.finally(() => {
    this.user = "";
    this.password = "";
})

v-model="user.email"



COMPONENT

App.vue
--------
<template>
    <div>
        <h1></h1>
        <LoginPage v-if="currentPage === 'login'" @changePage="changePage" ></MainHeader>
    </div>

</template>

<script>
import MainHeader from "./components/Mainheader"
    export default {
        name: "App",
        data () {
            return {
                name: "hardin"
                currentPage: "login"
            }
        },
        methods: {
            changePage(page) {
                this.currentPage = page
            }
        },
        components: {
            LoginPage
        },
        created(){
            if(naldfadf)
        }
    }
</script>

<style scoped>

</style>






main.js
-------
import Vue from "vue";
import App from "./App.vue";

new Vue({
    render: h => h(App),  
}).$mount("#app")





MainHeader
<template>
    <div>

    </div>
</template>


LoginPage.vue
-------------

<template>

</template>

scriptexport defcault {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login () {
            localStorage.setItem..
            this.$emit("", params)
        }
    }
}

props
ayah ke anak

<MovieList movie="movies"


MovieList
name: "MovieList"
props: ["movies"]
