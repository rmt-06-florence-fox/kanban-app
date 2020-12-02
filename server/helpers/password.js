const bcrypt = require('bcryptjs')

function encrypt(string) {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(string, salt)
    return hash
}

function decrypt(string, hash) {
    return bcrypt.compareSync(string, hash)
}

module.exports = {
    encrypt, decrypt
}