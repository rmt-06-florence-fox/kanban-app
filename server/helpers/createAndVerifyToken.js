var jwt = require('jsonwebtoken');

function createToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(encoded) {
    return jwt.verify(encoded, process.env.SECRET)
}

module.exports = {
    createToken,
    verifyToken
}