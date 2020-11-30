const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class Helper {

    static hashing(plain){
        let salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(plain, salt)
    }

    static checkPassword(plain, hashed){
        return bcrypt.compareSync(plain, hashed)
    }

    static tokenGenerator(payload){
        //console.log(process.env.JWT)
        return jwt.sign(payload, process.env.JWT)
    }

    static decoder(token){
        return jwt.verify(token, process.env.JWT)
    }

}

module.exports = Helper;