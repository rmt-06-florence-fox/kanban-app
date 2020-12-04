const jwt = require('jsonwebtoken')

function generateJwt(payload){
    return jwt.sign(payload,process.env.SECRET)
}

function decodeJwt(access_token){
    let decoded = jwt.verify(access_token,process.env.SECRET)
    return decoded
}

module.exports = {
    generateJwt , decodeJwt
}