const UserController = require('../controllers/user-controller')
const authentication = require('../middlewares/authentication')
const router = require('express').Router()
const taskRouter = require('./task-router')

router.post('/login', UserController.loginHandler)
router.post('/register', UserController.registerHandler)

router.use(authentication)
router.use('/tasks', taskRouter )

module.exports = router