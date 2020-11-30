const Jwt = require('../helpers/jwt')
const { User } = require('../models/index')

static function authentication (res, res, next) {
    const { access_token } = req.headers
    try {
        if(!access_token) {
            res.status(401).json({
                message: 'Please login first'
            })
        }else {
            const decoded = Jwt.verifyToken(access_token)
            const user = await User.findOne({
                where: {
                    email: decoded.email,
                    id: decoded.email
                }
            })
            if(!user) {
                throw { error: 'Please login first', status: 401}
            }
            else {
                req.loggedIn = decoded
                next()
            }
        }
    }catch(error){
        next(error)
    }
}

module.exports = authentication