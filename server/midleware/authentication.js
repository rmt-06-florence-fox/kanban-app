const {decodeToken} = require('../helper/jwt')
const {User} = require('../models/index')


async function authentication(req,res,next){
    const access_token = req.headers.access_token

    try {
        console.log('=====try authen')
        const decode = await decodeToken(access_token)
        console.log(decode)
        const user = await User.findOne({
            where : {
                id : decode.id
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