const http = require('http');

const server = http.createServer((req, res) => {
    let uri = req.url;
    switch (uri) {
        case "/":
            {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end('<h1>home page</h1>')
            };
            break;
        case "/about":
            {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end('<h1>about page</h1>');
            }
            break;
        case "/contact":
            {
                res.writeHead(200, { "Content-type": "text/html" });
                res.end('<h1>contact page</h1>');
            }
            break;
        default:
            {
                res.writeHead(404, { "Content-type": "text/html" });
                res.end("<h1>error 404!! page not found</h1>");
            }
            break;
    }

})

server.listen(8080, '127.0.0.1', () => {
    console.log("server run on port 8080");
})