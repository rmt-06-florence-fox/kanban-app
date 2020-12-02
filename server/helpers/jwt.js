require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, process.env.JWTSecretKey)
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWTSecretKey)
}

module.exports = {
    generateToken,
    verifyToken
}