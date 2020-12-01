const {decodeToken} = require('../helper/jwt')
const {User} = require('../models/index')


async function authentication(req,res,next){
    const access_token = req.headers.access_token

    try {
        const decode = await decodeToken(access_token)
        const user = await User.findOne({
            where : {
                id : decodeToken.payload.id
            }
        })
        if(user){
            req.loginUser = decode
            next()
        }else {
            throw {
                code : 401,
                msg : 'please login'
            }
        }
    } catch (error) {
        next(error)
    }   
}

module.exports = authentication