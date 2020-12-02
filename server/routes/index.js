const router = require ('express').Router()
const taskRoute = require ("./taskRoute.js")
const UserController = require ("../controllers/usercontroller.js")

router.post ("/register", UserController.register)
router.post ("/login", UserController.login)
router.post ("/googlelogin", UserController.googlelogin)
router.use ('/tasks', taskRoute)

module.exports = router
