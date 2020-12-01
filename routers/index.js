const UserController = require('../controllers/user-controller')
const router = require('express').Router()
const taskRouter = require('./task-router')

router.post('/login', UserController.loginHandler)
router.post('/register', UserController.registerHandler)

router.use('/tasks', taskRouter )

module.exports = router