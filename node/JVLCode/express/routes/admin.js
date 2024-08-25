const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();



// router.get('/', (req, res, next) => {
//     console.log("Welcome");
//     res.send('<h1> Welcome </h1><form action="/add-product"><input type="submit" value="submit"></form>');   
//     next();
// });

router.get('/add-product',(req, res, next)=> {
//    res.send('<h1>Add Product</h1><form action="/admin/store-product" method="POST"><input type="text" name="title"><input type="submit" value="submit"></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
router.post('/store-product',(req, res, next)=> {    
    console.log('request body', req.body);
    res.send('<h1> Product Submitted </h1>');
    res.end();
    
});

module.exports = router;