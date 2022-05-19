const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('redirected to server');
})

server.listen(8080,'127.0.0.1',()=>{
    console.log("server run on port 8080");
})