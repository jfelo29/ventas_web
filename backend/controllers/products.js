const Product = require('../models/products');


const createProduct = async (req, res) => {
 try {
  const { name, price, image } = req.body;
  const product = new Product({ name, price, image });
  await product.save();
  res.status(201).json(product);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }


};

const getProducts = async (req, res) => {
 try {
  const products = await Product.find();
  res.status(200).json(products);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};
module.exports = { createProduct, getProducts };