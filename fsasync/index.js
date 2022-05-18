const fs = require('fs');

// in asynschronize js , callback should be padd as third argument

fs.writeFile('read.txt',"asynchronize file system",(err)=>{
    console.log(err);
});
fs.appendFile('read.txt'," , using callback",(e)=>{
    console.log(e)
});
fs.readFile('read.txt',"utf-8",(e,data)=>{
    console.log(data)
})
fs.rename('read.txt','readwrite.txt',(e)=>{
    console.log(e);
});
