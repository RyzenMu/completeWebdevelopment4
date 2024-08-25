const express = require('express');
// const exphbs = require('express-handlebars');
const exphbs = require('express-handlebars');
const router = express.Router();
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.engine('hbs', engine({
  defaultLayout: 'header', // If you're using layouts
  // partialsDir: __dirname + '/views/partials',
  extname : '.hbs'
}));

// Set up handlebars view engine
app.set('view engine', 'hbs');
app.set('views', './views');

// Serve static files from public folder
app.use(express.static('public'));

// Sample data (replace with your data)
const destinations = [
  { name: 'Paris', image: 'paris.jpg', description: 'The City of Love', olympics:true },
  { name: 'Tokyo', image: 'tokyo.jpg', description: 'A bustling metropolis' },
  { name: 'Sydney', image: 'sydney.jpg', description: 'Beautiful harbor city' },
  ];

const courses = [
  'PHP',
  'Java',
  'Python',
  'JS'
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { destinations, docTitle : " Travel WEbsite- handlebars", courses });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
