const bcrypt = require('bcryptjs')

const generatePassword = (password) => {

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(password, salt);

    return hash 
}

const comparePassword = (password, hashPassword) => {
   return bcrypt.compareSync(password, hashPassword)
}

module.exports = {generatePassword, comparePassword}