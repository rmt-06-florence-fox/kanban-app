const bcrypt = require('bcryptjs')

class PassHelper{
  static converPassword(plain){
    const salt = bcrypt.hashSync(process.env.SALT);
    return bcrypt.hashSync(plain,salt);
  }

  static comparePassword(plain,hash){
    return bcrypt.compareSync(plain,hash)
  }
}

module.exports = PassHelper;