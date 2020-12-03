<template>
  <div id="add-new-task">
        <img src="https://images.vexels.com/media/users/3/152299/isolated/preview/4f63af6a16633f2bfd29063205f2882c-astronaut-flying-cartoon-by-vexels.png" style="width: 400px; position: absolute; margin-left: 8%; margin-top: 8%;" alt="">
        <div id="add-task-page">
            <form id="form-add-task" class="border bg-success">
                <h2 style="text-align: center;">add-task</h2>
                <label for="">name</label><br>
                <input type="text" placeholder="task name here" id="add-task-fullname" required>
                <br><br>
                <label for="">description</label><br>
                <input type="email" placeholder="task description here" id="add-task-email" required>
                <br><br>
                <label for="">category</label><br>
                <select class="custom-select my-1 mr-sm-2" id="selectCategory">
                    <option selected>Choose....</option>
                    <option value="Back-Log">Back-Log</option>
                    <option value="To-Do">To-Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <br><br>
                <button id="add-task-btn">add task</button>
                <br><br>
                <button class="btn-delete-task" style="font-size: 15px; border-radius: 15px; border: none; outline: none;">cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    /* ----add-task page---- */
#add-task-page{
    margin-top: 10%;
    margin-bottom: 40%;
    margin-left: 40%;
    margin-right: 35%;
    color: honeydew;    
}
/* ----add-task form---- */
#form-add-task{  
    padding-top: 20%;
    padding-bottom: 20%;
    padding-left: 60px;
    padding-right: 50px;
    border-radius: 15px;
    box-shadow: 4px 12px 12px 4px #999;
}
#add-task-fullname{
    border-radius: 15px
}
#add-task-email{
    border-radius: 15px
}
#add-task-password{
    border-radius: 15px
}

/* ----add-task btn---- */
#add-task-btn {
    margin-left: 10%;
    display: inline-block;
    padding: 10px 10px 10px 10px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    width: 80%;
}
#add-task-btn:hover {
    background-color: #3e8e41
}
#add-task-btn:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

/* cancel-task */

.btn-delete-task {
    margin-left: 35%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #df1616;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 30%;
}
.btn-delete-task:hover {
    background-color: #df1616
}
.btn-delete-task:active {
    background-color:#df1616;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>