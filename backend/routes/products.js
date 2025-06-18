const router = require('express').Router();

const { createProduct, getProducts } = require('../controllers/products');

const auth = require('../middlewares/auth');


router.post('/products', auth, createProduct);

router.get('/products', auth, getProducts);

module.exports = router;