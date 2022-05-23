// stream example

const fs = require('fs')
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // 1st way to send response to client
    // fs.readFile("index.txt",'utf-8',(error,data)=>{
    //     if(error) return console.log(error);
    //     res.end(data);
    // })

    // // 2nd Way
    // // Reading fromaStream
    // // Createareadable stream
    // // Handle stream events data,end,and error

    // const rstream = fs.createReadStream('index.txt'); // created readable stream to read data from index.txt file
    // // data event definition
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata)
    // });
    // // end event defintion
    // rstream.on('end', () => {
    //     res.end();
    // });
    // // error event defintion
    // rstream.on('error', (error) => {
    //     console.log("error...???", error);
    //     res.end(error)
    // });

    // 3rd way using pipe

    const rstream = fs.createReadStream('index.txt'); // created readable stream to read data from index.txt file
    rstream.pipe(res);
});

server.listen(8000, '127.0.0.1', () => { console.log("server run on port 8000") });