// const http = require('http');

const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.urlencoded());

// loading static files


app.use('/admin', adminRoutes); 
app.use(shopRoutes);

// error response
app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// app.use('/',(req, res, next)=> {
//     console.log('First Middleware');     
//     res.send('First Page');
//     // next();
// });

// app.use((req, res, next)=> {
//     console.log('Second Middleware');     
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("third middleware");    
//     // res.send('<h1> Hello from express </h1>');
//     res.send({some : "json from middleware 3"});
//     res.end();
// });
// const server = http.createServer(app);

app.listen(8623);
