const UserController = require('../controllers/user-controller')
const authentication = require('../middlewares/authentication')
const router = require('express').Router()
const taskRouter = require('./task-router')
const ColumnController = require('../controllers/column-controller.js')

router.post('/login', UserController.loginHandler)
router.post('/register', UserController.registerHandler)
router.post('/google-sign-in', UserController.googleSignIn)

router.use(authentication)
router.use('/tasks', taskRouter )
router.get('/columns', ColumnController.get)
router.post('/columns', ColumnController.create)

module.exports = router
