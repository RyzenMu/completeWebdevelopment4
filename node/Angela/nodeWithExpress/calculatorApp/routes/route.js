const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index');
});

router.post('/result', (req, res, next) => {
    const firstNumber = parseInt(req.body.num1);
    const secondNumber = parseInt(req.body.num2);
    const result = firstNumber + secondNumber;
    
    res.render('result', { result });
});

module.exports = router;