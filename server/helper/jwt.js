const jwt = require('jsonwebtoken')

function getToken(payload){
    return jwt.sign(payload, process.env.secret)
}

function decodeToken(token){
    return jwt.verify(token,process.env.secret)
}

module.exports = {
    getToken,
    decodeToken
}