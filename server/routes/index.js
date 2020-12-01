const express = require('express')
const router = express.Router()
// const authentication = require('../middlewares/authentication.js')
// const authorization = require('../middlewares/authorization.js')

// router.post('/googleLogin', Controller.googleSignIn);
router.get('/', (req, res) => {
  res.send('server kanban board')
})
// router.use(authentication)

module.exports = router
