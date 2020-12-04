const router = require('express').Router()
const ControllerUser = require('../controllers/ControllerUser')

router.post('/login', ControllerUser.login)
router.post('/googleLogin', ControllerUser.googleLogin)
router.post('/register', ControllerUser.register)

module.exports = router