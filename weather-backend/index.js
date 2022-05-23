const http = require('http');
const requests = require('requests');

const server = http.createServer((req, res) => {
    // console.log('your request params is.....????',req);
    if (req.url === '/'){
        res.end('home page');
    }else if(req.url === '/get') {
        requests('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2e9707284133b59889b196d6953b543f')
            .on('data', (chunk) => {
                // console.log(chunk)
                res.write(chunk);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end()
                // console.log('end');
            })
    }
    else {
        res.end("<h1>error 404!! page not found</h1>");
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('server run on port 8000');
})
