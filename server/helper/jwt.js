const jwt = require('jsonwebtoken')
console.log('========JWT')
console.log(process.env.secret)
function getToken(payload){
    return jwt.sign(payload, process.env.secret)
}

async function decodeToken(token){
    console.log('============decode')
    try {
        console.log('try ============decode')

        const decode = await jwt.verify(token,process.env.secret)
        return decode
    } catch (error) {
        throw {
            code : 400,
            msg : 'please login'
        }
    }
}

module.exports = {
    getToken,
    decodeToken
}