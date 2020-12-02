
const router = require('express').Router()
const { UserController, TaskController } = require('../controllers')
const { Authentication, Authorization } = require('../middlewares')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.post('/google-login', UserController.googleLogin)
// router.post('/', UserController.githubLogin)

//Authentication Required
router.use(Authentication)
router.get('/tasks', TaskController.getAll)
router.post('/add', TaskController.create)

//Authorization Required
router.use('/:id',Authorization)
// router.pacth('/:id', TaskController.update)
// router.put('/:id', TaskController.edit)
// router.delete('/:id', TaskController.delete)


module.exports = router




