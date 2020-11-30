const bcrypt = require('bcrypt')


function getHashPassword(password){
    return bcrypt.hashSync(password,10)
}

function comparePassword (password,hash){
    return bcrypt.compareSync(password,hash)
}


module.exports = {
    getHashPassword,
    comparePassword
}