const bcryptjs = require('bcryptjs')

function hash(input){
   return bcryptjs.hashSync(input)
}

function compare(input,realPassword){
   return bcryptjs.compareSync(input,realPassword)
}

module.exports = {hash,compare}