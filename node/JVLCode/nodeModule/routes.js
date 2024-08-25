const fs = require('fs');
const querystring = require('querystring'); // Module to parse form data

const requestHandler = (req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Listen for data chunks
        req.on('data', chunk => {
            body += chunk.toString(); // Convert buffer to string and append to body
        });

        

        // Once all data is received
        req.on('end', () => {
            // Parse the form data
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name; // Extract the 'name' field

            console.log('Received name:', name); // Log the name to the console

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Server running</h1>');
            res.write('<p>Received name: ' + name + '</p>');
            res.write('<form action="/" method="POST">');
            res.write('<input type="text" name="name">');
            res.write('<input type="submit" value="submit">');
            res.write('</form>');
            res.end();
        });

    } else {
        // Handle GET requests
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Server running</h1>');
        res.write('<form action="/" method="POST">');
        res.write('<input type="text" name="name">');
        res.write('<input type="submit" value="submit">');
        res.write('</form>');
        res.end();
    }
};

// module.exports = requestHandler;
// module.exports = {
//     handler : requestHandler,
//     someText : "printing some text",
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "Ptinting some rtext";

exports.handler = requestHandler;
exports.someText = "Printing som text";