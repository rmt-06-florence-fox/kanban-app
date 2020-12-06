const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const taskRouter = require('./taskRouter.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/tasks', taskRouter)

module.exports = router