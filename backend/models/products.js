const mongoose = require('mongoose');

const urlregex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

const productSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  minlength: 3,
  maxlength: 50,
 },

 price: {
  type: Number,
  required: true,
  min: 0,
  max: 10000,
 },
 image: {
  type: String,
  required: true,
  match: urlregex,
 },


 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model('Product', productSchema);

