const router = require('express').Router()
const userControl = require('../controllers/user')

router.post('/signup', userControl.signUp)
router.post('/signin', userControl.signIn)

module.exports = router