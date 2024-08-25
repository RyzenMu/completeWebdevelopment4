const http = require('http');
const routes = require('./routes.js')

// console.log(routes.someText);

console.log(routes.someText);

// const server = http.createServer(routes.handler);
const server = http.createServer(routes.handler);

server.listen(8622);