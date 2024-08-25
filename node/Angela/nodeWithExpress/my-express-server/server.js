const express = require('express');
const router = require('./routes/route');
const app = express()
const port = 8000;

app.use('/', router);

 
app.listen(port, ()=>{
    console.log("Listening to port : 8000");    
});