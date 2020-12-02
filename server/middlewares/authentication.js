const { User } = require('../models')
const jwt = require('jsonwebtoken')

async function authentication(req,res,next){
    try {
        let decoded = jwt.verify(req.headers.access_token,process.env.SECRET)
        if(!decoded){
            throw{
                status: 400,
                msg: 'login first!'
            }
        }
        let userLogin = await User.findOne({
            where:{
                id: decoded.id,
                email: decoded.email
            }
        })
        req.loggedInUser = {
            id: userLogin.id,
            email: userLogin.email
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authentication