<template>
    <div>
        <div class="row">
            <div class="col-7 pading-1">
                <div class="jumbotron background-page">
                    <h1> HOME PAGE </h1>
                    <p>Welcome to application Kanban. For more details, <br> you can click option
                        <b>"Info"</b> in navbar for information what thats kanban.</p>
                </div>
            </div>
            <div class="col-5 image-home">
                <img src="../../assets/kanban-project-management.jpg" alt="kanban" height="450px" width="451px">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style>
    .background-page {
        min-height: 450px;
        margin: 0%;
    }

    .image-home {
        padding: 0%;
        margin: 0%;
    }

    .pading-1 {
        padding: 0%;
    }
</style>