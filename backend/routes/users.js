const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { getAllUsers, getUserById, createUser, deleteUser } = require('../controllers/users');
const Users = require('../models/users');
const auth = require('../middlewares/auth');



const valideURL = (value, helpers) => {
 if (!validator.isURL(value)) {
  return value;
 }
 return helpers.error('string.uri');

};

router.get('/users', getAllUsers);

router.get('/users/me', auth, getUserById);

router.get('/users/:id', getUserById);

router.post('/users', celebrate({
 body: Joi.object().keys({
  name: Joi.string().min(3).max(50).required(),
  number: Joi.number().min(1000000000).max(999999999999).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(100).required(),
 }),
}), createUser);

router.patch('/users/me', auth, async (req, res) => {
 try {
  const { name, email, password, number } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
   return res.status(404).json({ error: 'No encontrado' });
  }
  user.name = name;
  user.number = number;
  user.email = email;
  user.password = password;

  await user.save();
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json({ error: 'Error al actualizar usuario' });
 }
});
router.delete('/users/:id', auth, deleteUser);

module.exports = router;