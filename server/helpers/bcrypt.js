const bcrypt = require('bcryptjs')

function hashing(password) {
  const salt = bcrypt.genSaltSync(8)
  return bcrypt.hashSync(password, salt)
}

function compare(plainPass, hashPass) {
  return bcrypt.compareSync(plainPass, hashPass)
}

module.exports = {
  hashing,
  compare
}