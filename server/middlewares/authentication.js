const jwt = require('jsonwebtoken')
const { User } = require('../models')

const authentication = (req, res, next) => {
  const { access_token } = req.headers

  if(!access_token) {
    next({name: 'ACCESS_DENIED'})
  } else {
    const decoded = jwt.verify(access_token, process.env.SECRET)
    req.userData = decoded
    User.findByPk(decoded.id)
    .then(user => {
      if(user) {
        next()
      } else {
        next({name: 'AUTHENTICATION_FAILED'})
      }
    })
    .catch(next)
  }
}

module.exports = authentication