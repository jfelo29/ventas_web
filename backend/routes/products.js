const router = require('express').Router();

const { createProduct, getProducts } = require('../controllers/products');

//const auth = require('../middlewares/auth');


router.post('/', createProduct);

router.get('/', getProducts);

module.exports = router;