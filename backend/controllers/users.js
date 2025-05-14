const bcrypt = require('bcrypt');
const User = require('../models/users');


const getAllUsers = async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error en la consulta de usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'No encontrado' });
        }
        if (!user === "usuario no encontrado") {
            return res.status(404).send({ message: 'No encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error en la consulta de usuarios' });
    }
};

const createUser = async (req, res) => {

    try {
        const { name, email, password, number } = req.body;
        bcrypt.hash(password, 10)
            .then(hash => {
                const user = new User(
                    {
                        name,
                        number,
                        email,
                        password: hash,
                    },
                )
                return user;
            })
            .then(async (newUser) => {
                const user = await newUser.save();
                if (!user === 'usuario no encontrado') {
                    return res.status(404).send({ message: 'usuario no encontrado' });
                }
                return res.status(201).send(user);
            });
    } catch (error) {
        return res.status(500).send({ message: 'Error al obtener el usuario' });
    }
};
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'No encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error en la consulta de usuarios' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,

    // updateUser,
};

