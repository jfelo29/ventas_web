require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authorization.replace('Bearer ', '');
    try {
        const token = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        return next();
    } catch (error) {
        const err = new Error('Invalid token');
        err.status = 500;
        return next(err);


    }
};
