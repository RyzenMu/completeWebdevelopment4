const express = require('express');

const rootDir = require('../utils/path');

const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1> Welcome to the shop </h1>');
    // res.sendFile(path.join(__dirname, '..','views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router; 