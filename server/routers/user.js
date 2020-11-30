const router = require('express').Router()
const User = require('../controllers/user')

router.get('/', (req, res) => {
    res.send("<h1> Hello World")
})
router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router