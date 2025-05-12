const router = require('express').Router();
const { celebrate, Joi } = require('express-validator');
const validator = require('validator');
const { getAllUsers, getUserById, } = require('../controllers/users');
const Users = require('../models/user');
const auth = require('../middlewere/auth');

const valideURL = (value, helpers) => {
 if (!validator.isURL(value)) {
  return value;
 }
 return helpers.error('string.uri');

};

router.get('users', getAllUsers);
router.get('/users/me', auth.auth, getUserById);
router.get('/users/:id', getUserById);
router.post('/users', celebrate({
 body: Joi.object().keys({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).max(100).required(),
 }),
}), createUser);
router.patch('/users/me', auth.auth, async (req, res) => {
 try {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
   return res.status(404).json({ error: 'No encontrado' });
  }
  user.name = name;
  user.email = email;
  user.password = password;
  await user.save();
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json({ error: 'Error al actualizar usuario' });
 }
});


module.exports = router;