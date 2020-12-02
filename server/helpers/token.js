const jwt = require('jsonwebtoken')

function create(id, email) {
    return jwt.sign({id, email}, 'himawari')
}

function verify(token) {
    return jwt.verify(token, 'himawari')
}

module.exports = {
    create, verify
}