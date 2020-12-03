const { Router } = require('express')
const express = require('express')
const route = express.Router()
const ControllerTask = require('../controllers/controllerTask')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

route.use(authentication)
route.post("/", ControllerTask.createTask)
route.get("/" , ControllerTask.listTask)
route.put("/:id", authorization, ControllerTask.editTask)
route.patch("/:id", authorization, ControllerTask.editCategory)
route.delete("/:id", authorization, ControllerTask.deleteTask)


module.exports = route