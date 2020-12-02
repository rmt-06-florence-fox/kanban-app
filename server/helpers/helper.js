const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(+process.env.SALT);
const jwt = require('jsonwebtoken');

class Helper {
    static getHash (pass) {
        return bcrypt.hashSync(pass, salt)
    }

    static checkHash (pass, hash) {
        return bcrypt.compareSync(pass, hash)
    }

    static genToken (data) {
        return jwt.sign(data, process.env.SEC_KEY);
    }

    static degenToken (token) {
        return jwt.verify(token, process.env.SEC_KEY);
    }
    
}

module.exports = Helper