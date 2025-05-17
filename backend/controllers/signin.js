require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const { JWT_SECRET = 'secret-key' } = process.env;

module.exports.signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .select('+password')
        .then(user => {
            if (!user) {
                return res.status(400).json({ error: 'Usuario no encontrado' });
            }
            return bcrypt.compare(password, user.password).then((matched) => {
                if (!matched) {
                    return res.status(401).send({ message: 'datos de usuario incorrectos' });
                }
                const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
                res.status(200).send({ token });
            });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

