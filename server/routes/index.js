const router = require('express').Router()
const Controller = require('../controller/index')


router.get('/', (req, res) =>{
    res.send('HALOW')
})
router.post('/login', Controller.login)
router.post('/register', Controller.register)

module.exports = router