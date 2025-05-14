require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

const { JWT_SECRET = 'secret-key' } = process.env;

module.exports.signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .select('+password')
        .then(user => {
            if (!user) {
                return res.status(400).json({ error: 'Usuario no encontrado' });
            }
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Contraseña incorrecta' });
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            res.status(200).json({ token });
        })
        .catch(error => {
            res.status(500).json({ error: 'Error interno del servidor' });
        });

};