const express = require('express');
const app = express();
const cors = require('cors');

const productController = require('./controllers/productController');
const authController = require('./controllers/authController');

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// controllers
app.use('/api/products', productController);
app.use('/api/auth', authController);

module.exports = app;
