const express = require("express")
const router = express.Router()
const TaskController = require("../controller/task")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.use(authentication)
router.get("/categories", TaskController.getCategories) //get all categories
router.get("/", TaskController.showAllTasks) //get all tasks
router.get("/:id", TaskController.showTaskById) //get task by id
router.post("/", TaskController.addTask) //add task

router.use("/:id", authorization)
router.put("/:id", TaskController.updateTask ) //edit task
router.delete("/:id", TaskController.deleteTask) //delete task by id
router.patch("/:id", TaskController.updateCategory) // change task category

module.exports = router