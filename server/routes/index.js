const router = require("express").Router();
const { user, task } = require('../controllers/index.js')
const { authentication, authorization } = require('../middlewares/index.js')

//testing
router.get('/', (req, res, next) => {
  res.send('hello world!')
})

//user-utilities
router.post('/login', user.login)
router.post('/register', user.register)

//authentication
router.use(authentication)
router.get('/tasks', task.create)
router.post('/tasks', task.get)

//authorization
router.put('/tasks/:id', task.update)
router.delete('/tasks/:id', task.delete)
  
module.exports = router;
