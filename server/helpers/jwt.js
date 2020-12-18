const jwt = require('jsonwebtoken')

function generateToken(data){
    return jwt.sign(data, 'secret')
}

function checkToken(data){
    return jwt.verify(data, 'secret')
}

module.exports = {
    generateToken,
    checkToken
}