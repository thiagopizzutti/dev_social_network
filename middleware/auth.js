const jwt = require('jwttoken')
const config = require('config')

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header(x - auth - token)

    // check if not token
    if (!token) {
        return res.status(401).json({
            msg: 'No token. Authorization denied!'
        })
    }

    // verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'))
        req.user = decoded.user
        next()
    } catch {
        res.status(401).json({
            msg: 'Token is not valid'
        })
    }


}