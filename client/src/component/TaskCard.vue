<template>
  <div>
      <div class="card mt-3">

        <div  class="card-header">
          <h1>Task Card</h1>
        </div>

        <div class="card-body">
            <ul>
                <li>User</li>
                <li>DATE</li>
            </ul>
            <div>
                <a href="#"> <i  class="fa fa-pencil"></i></a>
                <a href="#"><i class="fa fa-trash-o"></i></a>
                <a href="#"><i class="fa fa-arrows"></i></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "TaskCard"
}
</script>

<style>

</style>