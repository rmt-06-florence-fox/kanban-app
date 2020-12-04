const token = require('../helpers/token')

module.exports = (req, res, next) => {
    try {
        if (req.headers.access_token) {
            const decoded = token.verify(req.headers.access_token)
            
            req.loggedInUser = decoded
            next()
        } else {
            next({
                status: 400,
                message: 'Please login first!'
            })
        }
    } catch (error) {
        next(error)
    }    
}