const {User} = require('../models')
const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const {access_token} = req.headers
    if(!access_token){
        throw{
            status: 401,
            message: 'Login First !'
        }
    } else {
        var decoded = jwt.verify(access_token, process.env.SECRET)
        User.findOne({
            where:{
                id: decoded.id
            }
        })
        .then(user =>{
            if(user){
                req.loggedIn = decoded
                next()
            } else {
                throw{
                    status: 401,
                    message: 'Login First !'
                }
            }
        })
        .catch(err =>{
            res.status(500).json({err})
    })
    }
}