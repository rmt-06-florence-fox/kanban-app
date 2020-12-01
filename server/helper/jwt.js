const jwt = require('jsonwebtoken')
console.log('========JWT')
console.log(process.env.secret)
function getToken(payload){
    return jwt.sign(payload, process.env.secret)
}

function decodeToken(token){
    console.log('============decode')
    return jwt.verify(token,process.env.secret)
}

module.exports = {
    getToken,
    decodeToken
}