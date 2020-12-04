const { route } = require('../../../../d1/first-livecode/server/routers')

const router = require('express').Router()
const UserController = require('../controllers/user')
const TaskController = require('../controllers/task')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)
router.get('/tasks/', TaskController.getAllTask)

router.use(authentication)
router.post('/tasks/', TaskController.createTask)
router.get('/tasks/:id', TaskController.getTaskById)

router.use('/tasks/:id', authorization)

router.put('/tasks/:id', TaskController.editById)
router.patch('/tasks/:id', TaskController.editCategoryById)
router.delete('/tasks/:id', TaskController.deleteTask)

module.exports = router