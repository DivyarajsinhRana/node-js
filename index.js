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


// thapa challange

// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

fs.mkdirSync('thapa'); //create file
// fs.writeFileSync('bio.txt','Hello,My name is divyaraj') // create file and add data into it
// fs.appendFileSync('bio.txt',',I am from vadodara'); // appedend more data into it




