const verifyToken = require("../helpers/verifyToken.js")
const { User } = require("../models/index.js")

function authentication(req, res, next){

  try {
    let { access_token } = req.headers

    if (!access_token){
      throw({
        status: 401,
        message: "You must login first"
      })
    }
    else {
      let decoded = verifyToken(access_token)
      //console.log(decoded)
      User.findOne({
        where: {
          id: decoded.id,
          email: decoded.email
        }
      })
        .then(user => {
          if(user){
            req.loggedInUser = decoded
            next()

          }
          else {
            throw({
              status: 401,
              message: "You must login first"
            })
          }
        })
        .catch(err => {
          throw(err)
        })
    }
  } catch (err) {
    console.log(err + " <<< ini dari authentication")
    next(err)
  }
}

module.exports = authentication