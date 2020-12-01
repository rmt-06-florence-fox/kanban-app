const express = require('express')
const router = express.Router()
const taskRouter = require('./taskRouter')
const {Controller} = require('../controllers/allController')

router.post('/login',Controller.login)
router.post('/register',Controller.register)
router.post('/googleLogin',Controller.googleLogin)
router.use('/tasks',taskRouter)


module.exports = router