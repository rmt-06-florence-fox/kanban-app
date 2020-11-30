var jwt = require('jsonwebtoken');

function createToken(payload) {
    return jwt.sign(payload, process.env.Secret)
}

function verifyToken(encoded) {
    return jwt.verify(encoded, process.env.Secret)
}

module.exports = {
    createToken,
    verifyToken
}