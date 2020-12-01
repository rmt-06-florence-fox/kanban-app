const express = require("express")
const router = express.Router()

router.get("/") //get all tasks
router.get("/:id") //get task by id
router.post("/",) //add task
router.put("/", ) //edit task
router.delete("/:id") //delete task by id

module.exports = router