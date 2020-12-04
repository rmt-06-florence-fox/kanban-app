<template>
        <nav>
            <div class="navbar-container mb-3">
                <div><img src="https://img2.pngdownload.id/20180501/jce/kisspng-phi-greek-alphabet-letter-beta-phi-barrier-5ae7f8eef32138.9021669115251519829959.jpg" alt="logo"></div>

                <div class="logo">
                    Kanban App
                </div>

                <div>
                    <div class="navbar-features">
                        <span @click="changePage('addPage')" class="add-task">
                              <i class="fa fa-plus"></i>
                              <p>CREATE</p>
                        </span>
                        
                        <button @click="logout" type="button" class="btn btn-danger">Logout</button>
                    </div>
                    
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    name : "Navbar",


    methods : {
        logout(){
            console.log('pagessss')
            this.$emit('logout')
        },
        changePage(page){
            console.log('page')
            this.$emit('changePage',page)
        }
    }
}
</script>

<style>

</style>