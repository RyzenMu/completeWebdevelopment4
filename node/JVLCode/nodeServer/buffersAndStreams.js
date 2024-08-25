// creating node server
const http = require('http'); 
const queryString = require('queryString');

function requestListener(req, res){
    if (req.method ==='POST'){
        let body = '';

        // listen for data chunk
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // once all the data is received
        req.on('end', ()=> {
            // parse the form data
            const parsedBody = queryString.parse(body);
            const name = parsedBody.name;
        })
    }
    res.write('<h1>Server running</h1>');
    res.write('<form action="/">');
    res.write('<input type="text" name="name">');
    res.write('<input type=submit value="submit"');
    res.write('</form>');
    res.end();
}

const server = http.createServer(requestListener);

server.listen(8620);

