const bcrypt = require('bcrypt')

class Bcrypt {
    static hash(password) {
        return bcrypt.hashSync(password, +process.env.BCRYPT)
    }

    static compare(passClient, passDatabase) {
        return bcrypt.compareSync(passClient, passDatabase)
    }
}

module.exports = Bcrypt