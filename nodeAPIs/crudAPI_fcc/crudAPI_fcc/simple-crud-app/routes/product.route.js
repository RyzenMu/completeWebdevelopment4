const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const productController = require('../controller/product.controller');
const { get } = require('mongoose');

router.get('/', productController.getProducts);

router.get('/:id', productController.getProduct);

module.exports = router;