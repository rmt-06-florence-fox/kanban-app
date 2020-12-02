const route = require("express").Router()
const taskRoute = require("./taskRoutes")
const UserController = require("../controllers/userController.js")

route.use('/tasks', taskRoute)
route.post('/register', UserController.register)
route.post('/login', UserController.login)

module.exports = route