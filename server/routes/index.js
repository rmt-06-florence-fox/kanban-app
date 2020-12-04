const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.post('/register', Controller.register)
router.post('/login', Controller.login)
// router.post('/googleLogin', Controller.googleLogin)

router.use(authentication)
router.get('/tasks', Controller.taskList)
router.post('/tasks', Controller.addTasks)

router.put('/tasks/:id', authorization, Controller.updateTask)
router.delete('/tasks/:id', authorization, Controller.deleteTask)


module.exports = router