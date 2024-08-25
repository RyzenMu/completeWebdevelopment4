const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the welcome page
app.get('/', (req, res) => {
    const name = 'John Doe'; // You can pass any data to the template
    const courses = [
        'php',
        'java',
        'js',
        'python',
        'c++ '
    ]
    res.render('welcome', { 
        name: name,
        docTitle : "Welcome Page",
        courses
     });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 