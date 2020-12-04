
const { User } = require("../models/index")
const { verifyToken } = require("../helpers/createAndVerifyToken")

function authentication(req, res, next) {
    let acces_token = req.headers.acces_token
   
    try {
        var decoded = verifyToken(acces_token)
        // console.log(decoded)
        if(!decoded) {
            throw {
                status: 401,
                message: { error: "You must have account" }
            }
        }else {
            let name = decoded.name
            let email = decoded.email
            let id = decoded.id

            req.dataUser = decoded

            User.findOne({
                where: {
                    email,
                    id
                }
            })
                .then(data => {
                    next()
                })
                .catch(err => {
                    throw {
                        status: 400,
                        message: "You must have account"
                    }
                })
        }
    } 
    catch(err) {
        next(err)
    }
}

module.exports = authentication