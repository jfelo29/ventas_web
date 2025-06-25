const router = require('express').Router();

const { createProduct, getProducts } = require('../controllers/products');




router.post('/', createProduct);

router.get('/', getProducts);

module.exports = router;