const route = require('express').Router();
const authModel = require('../models/authorization/authModel');

// unsecured routes
route.post('/signup', authModel.signUp);
route.post('/signin', authModel.signIn);

module.exports = route;