const jwt = require('jsonwebtoken')
const {User} = require('../models')

function authenticate(req, res, next) {
    if(!req.headers.accesstoken) {
        return res.status(401).json({msg: 'Not Authorized'})
    } 
    try {
        const userToken = jwt.verify(req.headers.accesstoken, process.env.SECRET)
        User.findOne({where: {id: userToken.id}})
            .then(user => {
                if(!user) {
                    res.status(401).json({msg: 'Not Authorized'})
                } else {
                    req.user = user.dataValues
                    next()
                }
            })
    } catch {
        res.status(500).json({msg: 'Internal server error authenticate'})
    }
}

module.exports = authenticate