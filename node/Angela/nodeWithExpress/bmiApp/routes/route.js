const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index')
})

router.post('/', (req, res, next)=>{
    const h = parseFloat(req.body.h);
    const w = parseFloat(req.body.w);
    const result = w / (h*h);
    res.render('index', {
        result
    })
})

module.exports = router;