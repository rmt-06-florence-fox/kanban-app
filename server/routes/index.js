const express = require('express')
const route = express.Router()
const ControllerUser = require('../controllers/controllerUser')
const taskRoutes = require('./taskRoutes')

route.get("/user",ControllerUser.findUser)
route.post("/login", ControllerUser.login)
route.post("/register", ControllerUser.register)
route.use("/task", taskRoutes)



module.exports = route