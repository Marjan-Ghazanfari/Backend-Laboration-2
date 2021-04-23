const router = require('express').Router();
const productModel = require('../models/products/productModel');
const authModel = require('../models/authorization/authModel');

// unsecured routes
router.get('/', productModel.getProducts);
router.get('/:id', productModel.getOneProduct);

// secured routes
router.post('/new', authModel.requireAuth, productModel.createProduct);
router.patch('/:id', authModel.requireAuth, productModel.updateProduct);
router.delete('/:id', authModel.requireAuth, productModel.deleteProduct);

module.exports = router;