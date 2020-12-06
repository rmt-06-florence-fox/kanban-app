require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateToken(payload){
  return jwt.sign(payload, "CocaColaFanta")
}

function verifyToken(token){
  return jwt.verify(token, "CocaColaFanta")
  
}

module.exports={
  generateToken,
  verifyToken
}


