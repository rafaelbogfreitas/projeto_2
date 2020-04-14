const express = require('express');
const router = express.Router();

const controllers = require('./controllers/registerControllers');
//Cloudinary config import
const uploadCloud = require('../config/cloudinary.js');

router.post('/register', uploadCloud.single('file'), controllers.registerPost);

module.exports = router;