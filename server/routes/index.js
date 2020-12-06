const route = require('express').Router()
const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')
const TaskController = require('../controllers/TaskController')
const authorization = require('../middlewares/authorization')
const CategoryController = require('../controllers/CategoryController')


route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.post('/googleLogin', UserController.googleLogin)

route.use(authentication)
route.post('/category', CategoryController.addCategory)
route.post('/task', TaskController.addTask)
route.get('/task', TaskController.getTask)
route.get('/category', CategoryController.getCategory)

route.use('/task/:id', authorization)
route.put('/task/:id', TaskController.editTask)
route.get('/task/:id', TaskController.detailTask)
route.patch('/task/:id', TaskController.doneTask)
route.delete('/task/:id', TaskController.deleteTask)






module.exports = route