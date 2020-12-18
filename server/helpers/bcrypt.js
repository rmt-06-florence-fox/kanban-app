const bcrypt = require("bcrypt")

function hash(password){
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

function compare(password, hash){
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hash,
    compare
}