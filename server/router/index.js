const express = require('express')
const UserController =  require('../controllers/UserController')
const taskRouter = require('./taskRouter')
const router = express.Router()


router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)
router.use('/tasks', taskRouter )
module.exports = router