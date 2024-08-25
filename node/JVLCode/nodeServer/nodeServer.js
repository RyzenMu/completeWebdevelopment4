

// create http object
const http = require('http');

// create fs object
const fs = require('fs');

// request listener
function rqListener(req, res){
    // console.log(req);
    console.log(req.url, req.method);
    console.log(req.headers);
    
    
    // stop listener or stop sewrver
    // process.exit();

    // sending response
    // sending request to uri

    const method = req.method;
 
    if (req.url === '/'){

        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Enter Form Details</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form method="POST" action="/message" enctype="multipart/form-data"><h1>Form</h1><input type="text"/><input type="file" name="file"/><input type="submit" value="send"/></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url ==='/message' && method === 'POST'){
        console.log('condition working');
        const body = [];
        req.on('data', (chunk)=> {
            body.push(chunk)
            console.log(chunk);
            
        });
        console.log(body);
        
        req.on('end', ()=>{
            console.log('end event received');
            
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            // fs.writeFileSync('hello1.txt', message[1]);
            fs.writeFile('hello.txt', message[1], (err)=> {
                console.log(err);                
            });
        });
    }
    {
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title> JVL code </title>');
        res.write('</head>');
        res.write('<body method="POST">');
        res.write('<h1> this is a form page </h1>')
        res.write(`
                <form action="message" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="email">Email:</label>   

        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>   


        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required><br><br>

        <input   
 type="submit" value="Create Account">
    </form>
            `)
        res.write('</body>');
        res.write('</html>');
        res.end();
    }

   // Redirecting Requests
    // Routing

// streams and buffers 
    
}

// create http server
const server = http.createServer(rqListener);

// listen method
server.listen(8619);
