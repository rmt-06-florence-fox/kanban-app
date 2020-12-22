const { User } = require('../models')
const Helper = require('../helpers')


module.exports = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { status: 401, message: "you are not auntheticated" }
    
    const decoded = Helper.decoder(access_token)
    // console.log(decoded)
    const user = await User.findOne({ where: { email: decoded.email } })

    if (user) {
      req.currentUser = user
      next()
    } else {
      throw { status: 401, message: "you are not auntheticated" }
    }

  } catch (err) {
      next(err)
  }
}