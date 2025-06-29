const mongoose = require('mongoose');



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

 },



}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

