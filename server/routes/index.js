const router = require('express').Router()
const Controller = require('../controller/index')
const authentication = require('../middlewares/authen')
const authorize = require('../middlewares/authorize')


router.get('/', (req, res) =>{
    res.send('HALOW')
})
router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.post('/googleLogin', Controller.googleLogin)


router.use(authentication)
router.get('/tasks', Controller.showTask)
router.post('/tasks', Controller.newTask)

router.put('/tasks/:id', authorize, Controller.editTask)
router.patch('/tasks/:id',authorize, Controller.patchTask)
router.delete('/tasks/:id', authorize, Controller.destroyTask)


module.exports = router