const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            //decode the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.id;
        } catch (error) {
            res.status(401)
            throw new Error('The token is not authorized!')
        }
    } else {
        res.status(401);
        throw new Error('No token, not authrorized!')
    }
    next()
}

module.exports = {
    protect
}