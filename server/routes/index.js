const router = require('express').Router()
const { UserController } = require('../controllers')
const { TaskController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)

router.post('/tasks', TaskController.inputTask)
router.get('/tasks', TaskController.showList)

router.put('/tasks/:id', authorization, TaskController.updateTask)
router.patch('/tasks/:id', authorization, TaskController.updateCategory)
router.delete('/tasks/:id', authorization, TaskController.deleteTask)


module.exports = router