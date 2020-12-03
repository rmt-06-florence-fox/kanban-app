<template>
    <div>
      <div class="card mt-3">
          <h1>Edit</h1>
        <div  class="card-header">

            <div class="edit-task">
              <input  placeholder="task title" type="text" ><br>
              <button class="btn btn-primary"> edit</button>
              <button class="btn btn-danger"> cancel</button>
            </div>

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
    name : "EditTask"
}
</script>

<style>

</style>