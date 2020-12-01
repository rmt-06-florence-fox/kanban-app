const jwt = require('jsonwebtoken')

console.log(process.env.NODE_ENV)

function tokenize(data){
   return jwt.sign(data,process.env.SECRET)
}

function verify(token){
   return jwt.verify(token,process.env.SECRET)
}

module.exports = {tokenize,verify}