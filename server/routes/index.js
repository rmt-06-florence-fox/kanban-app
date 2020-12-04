const router = require('express').Router()
const UserController = require('../controllers/userController')
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', UserController.home)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)
router.get('/tasks', TaskController.allTasks)
router.post('/tasks', TaskController.addTask)
router.delete('/tasks/:id', authorization, TaskController.delTask)
router.put('/tasks/:id', TaskController.updateTask)


module.exports = router