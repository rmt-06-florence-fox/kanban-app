const express = require("express")
const route = express.Router()
const ControllerUser = require("../controllers/userControllers")
const authentication = require("../middlewares/authentication")
const ControllerTask = require("../controllers/taskController")
const authorization = require("../middlewares/authorization")

route.post("/register", ControllerUser.registerUser)
route.post("/login", ControllerUser.loginUser)

route.use(authentication)
route.get("/", ControllerTask.showAllDataTask)
route.post("/", ControllerTask.createDataTask)

route.put("/:id", authorization, ControllerTask.updateDataTask)
route.patch("/:id", authorization, ControllerTask.modifyDataTask)
route.delete("/:id", authorization, ControllerTask.destroyDataTask)


module.exports = route