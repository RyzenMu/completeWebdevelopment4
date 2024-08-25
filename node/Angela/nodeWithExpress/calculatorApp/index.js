const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const router = require('./routes/route');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true})); 


app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.engine('hbs', engine({
    defaultLayout: false,
    extname: 'hbs'
}));

app.use('/', router );

app.listen(8000, ()=>{
    console.log('listening on port 8000');
    
})



