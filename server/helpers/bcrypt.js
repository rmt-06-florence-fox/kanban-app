const bcrypt = require('bcrypt');

function generatePassword(raw){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(raw, salt);
    return hash;
}

function checkPassword(raw, hash){
    return bcrypt.compareSync(raw, hash);
}

module.exports = {
    generatePassword,
    checkPassword
}