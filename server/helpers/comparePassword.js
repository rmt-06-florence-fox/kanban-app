const bcrypt = require("bcryptjs")
module.exports = (input, password) => {
  return bcrypt.compareSync(input, password);
}