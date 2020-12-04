const router = require('express').Router()
const UserController = require('../controllers/user')
const TaskController = require('../controllers/task')
const CategoryController = require('../controllers/category')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googlelogin', UserController.googlelogin)

router.use(authentication)

router.post('/tasks', TaskController.addTask)
router.get('/tasks/:id', authorization, TaskController.getTaskById)
router.put('/tasks/:id', authorization, TaskController.editTask)
router.patch('/tasks/:id', authorization, TaskController.editCategory)
router.delete('/tasks/:id', authorization, TaskController.deleteTask)
router.get('/categories', CategoryController.getCategory)
router.post('/categories', CategoryController.addCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)

module.exports = router