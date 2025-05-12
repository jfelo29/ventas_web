require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

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
    /*
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }*/
};