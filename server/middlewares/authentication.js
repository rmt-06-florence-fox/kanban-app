
const { User } = require("../models/index")
const { verifyToken } = require("../helpers/createAndVerifyToken")

function authentication(req, res, next) {
    let acces_token = req.headers.acces_token
   
    try {
        var decoded = verifyToken(acces_token)
        // console.log(decoded)
        if(!decoded) {
            res.status(400).json({ message: "You must have account" })
        }else {
            // console.log(decoded) 
            // {
            //     name: 'Febrian Aditya',
            //     email: 'febri@mail.com',
            //     id: 1,
            //     iat: 1606829737
            //   }
            let name = decoded.name
            let email = decoded.email
            let id = decoded.id

            req.dataUser = decoded

            User.findOne({
                where: {
                    email
                }
            })
                .then(data => {
                    next()
                })
                .catch(err => {
                    res.status(400).json({ message: "You must have account" })
                })
        }
    } 
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = authentication