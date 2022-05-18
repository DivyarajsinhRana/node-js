// Node.js core modules.

// 1.file-system
const fs = require('fs'); // use fs module in script
fs.writeFileSync('read.txt','test file');  // * create a new file
fs.writeFileSync('read.txt','this is test file'); // overwrite file content
fs.appendFileSync('read.txt','this text appdended to above content') // add new content in file
const buf_data =fs.readFileSync('read.txt'); // read content of file
console.log('buffer data is.....???',buf_data)  // buffer data in binary formate
const data = buf_data.toString() // buffer data into string
console.log('data is.....???',data)  // buffer data in binary formate
fs.renameSync('read.txt','readwrite.txt'); // rename file








