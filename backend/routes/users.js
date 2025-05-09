const router = require('express').Router();
// const { celebrate, Joi } = require('express-validator');
const validator = require('validator');
const { getAllUsers, getUserById, } = require('../controllers/users');
// const Users = require('../models/user');
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


module.exports = router;