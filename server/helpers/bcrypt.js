const bcrypt = require('bcryptjs')
console.log('start in bcrypt');
const hashPassword =  password => {
  return bcrypt.hashSync(password, +process.env.SALT)
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash) 
}

module.exports = {hashPassword, comparePassword}
console.log('end in bcrypt');