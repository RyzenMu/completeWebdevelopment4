const express = require('express')
const app = express()

const router = express.Router();

router.get('/', function(req, res){
    res.send('This is a routes');
});

router.get('/about', function(req, res){
    res.send('This is a routes-about');
});

router.get('/contact', function(req, res){
    res.send('This is a routes-contact');
});

module.exports = router;