const bcrypt = require('bcryptjs')

let hash = (value) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(value, salt);
}

let compare = (value, hashedPassword) => {
  return bcrypt.compareSync(value, hashedPassword)
}

module.exports = {hash, compare}