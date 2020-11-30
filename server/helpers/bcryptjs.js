const bcrypt = require('bcryptjs')

function generatePassword(data){
    var salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(data, salt);
}

function checkPassword(data, datadb){
    return bcrypt.compareSync(data, datadb)
}

module.exports = {
    generatePassword,
    checkPassword
}