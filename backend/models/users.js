const mongoose = require('mongoose');
const validator = require('validator');



const userSchema = new mongoose.Schema({
 name: {
  type: String,
  default: '',
  minlength: 3,
  maxlength: 50,
 },
 number: {
  type: Number,
  default: 0,
  minlength: 9,
  maxlength: 15,
 },
 email: {
  type: String,
  required: true,
  unique: true,
  minlength: 5,
  maxlength: 50,
  validator: (v) => validator.isEmail(v),
  message: 'email invalido',
 },

 password: {
  type: String,
  required: true,
  minlength: 2,
  maxlength: 100,
  select: false,

 },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
