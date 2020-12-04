const router = require("express").Router()
const UserController = require("../controllers/UserController")
const TaskController = require("../controllers/TaskController")
const Authenticate = require("../middlewares/Authenticate")
const Authorization = require("../middlewares/Authorization")

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.post("/googleLogin", UserController.googleLogin)

router.use(Authenticate)
router.get("/backlog", TaskController.getTaskBacklog)
router.get("/todo", TaskController.getTaskTodo)
router.get("/doing", TaskController.getTaskDoing)
router.get("/done", TaskController.getTaskDone)
router.post("/task", TaskController.createTaks)

router.use("/task/:id", Authorization)
router.put("/task/:id", TaskController.updateTask)
router.delete("/task/:id", TaskController.deleteTask)

module.exports = router