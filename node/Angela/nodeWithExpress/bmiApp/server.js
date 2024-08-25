const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const router = require('./routes/route');

app.engine('hbs', engine({
    defaultLayout: false,
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

app.listen(8000, ()=>{
    console.log("listening on 8000 port");    
});