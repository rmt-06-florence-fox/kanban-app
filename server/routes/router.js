const router = require ('express').Router()
const user = require('./route-user')


router.get('/', (req, res, next) => {
    res.send('welcome')
})


router.post('/login')
router.post('/register')

router.use('/user', user)


module.exports = router