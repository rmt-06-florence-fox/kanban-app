const express = require('express')
const router = express.Router()
const taskRouter = require('./task')
const {UserController} = require('../controllers')

router.use('/tasks', taskRouter)
router.get('/', (req, res) => {
    res.send("Welcome to kanban app")
})
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router 