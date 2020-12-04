const router = require("express").Router()
const UserController = require("../controllers/UserController")
const TaskController = require("../controllers/TaskController")
const Authenticate = require("../middlewares/Authenticate")
const Authorization = require("../middlewares/Authorization")

router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.post("/googleLogin", UserController.googleLogin)

router.use(Authenticate)
router.get("/task", TaskController.getAllTask)
router.post("/task", TaskController.createTaks)

// router.use("/task/:id", Authorization)
router.get("/task/:id",Authorization, TaskController.getTaskById)
router.put("/task/:id", Authorization, TaskController.updateTask)
router.delete("/task/:id", Authorization, TaskController.deleteTask)

module.exports = router