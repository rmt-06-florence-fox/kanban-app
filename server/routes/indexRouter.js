const express = require('express')
const router = express.Router()
const taskRouter = require('./taskRouter')
const {Controller} = require('../controllers/allController')
const categoryRouter = require('./categoryRouter')

router.post('/login',Controller.login)
router.post('/register',Controller.register)
router.post('/googleLogin',Controller.googleLogin)
router.use('/tasks',taskRouter)
router.use('/categories',categoryRouter)


module.exports = router