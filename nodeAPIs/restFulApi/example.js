
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    };

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(8000);

console.log('Listenig on port 8000');