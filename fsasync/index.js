const fs = require('fs');

// in asynschronize js , callback should be padd as third argument

fs.writeFile('read.txt', "asynchronize file system", (err) => {
    console.log(err);
});
fs.appendFile('read.txt', " , using callback", (e) => {
    console.log(e)
});
fs.readFile('read.txt', "utf-8", (e, data) => {
    console.log(data)
})
fs.rename('read.txt', 'readwrite.txt', (e) => {
    console.log(e);
});


// // Challenge Time
// //
// 1: Create a folder named it Thapa
// //
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// //
// //
// 4: Read the data without getting the buffer data at first.
// 7 // file encoding
// //
// 5: Rename the file name to mybio.txt
// //
// 6: now delete both the file and the folder`

fs.mkdir('thapasync', (e) => console.log(e));                                                               //create folder
fs.writeFile('thapasync/bio.txt', 'challange test time', (e) => console.log(e))                             // create a new async file
fs.appendFile('thapasync/bio.txt', 'this challange include asynchronize action', (e) => console.log(e))  //append more text to content
fs.readFile('thapasync/bio.txt','utf-8',(e,data)=>{
    if(e) {
        console.log(e)
    }
    console.log(data)
});                                                                                                       // read data
fs.rename('thapasync/bio.txt','thapasync/mybio.txt',(e)=>console.log(e));                                 // rename file
// fs.unlink('thapasync/mybiobio.txt',(e)=>{
//     console.log(e);
//     console.log('called')
// })                                                      // delete file
// fs.rmdir('thapasync',(e)=>{
//     console.log(e);
//     console.log('called')
// })                                                      // delete file
