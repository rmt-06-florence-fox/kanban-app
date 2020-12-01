const jwt = require('jsonwebtoken')

function tokenize(data){
   return jwt.sign(data,process.env.SECRET)
}

function verify(token){
   return jwt.verify(token)
}

module.exports = {tokenize,verify}