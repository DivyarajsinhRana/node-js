const fs = require('fs');
// thapa challange

// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

// fs.mkdirSync('thapa'); //create file
fs.writeFileSync('bio.txt','Hello,My name is divyaraj')     // create file and add data into it
fs.appendFileSync('bio.txt',' ,I am from vadodara');        // appedend more data into it
const data = fs.readFileSync('bio.txt','utf8',(err,data)=>{ 
        if(err) throw err; 
        return data
})                                                          // data without getting in buffer type
console.log('data.......??????',data); 

fs.renameSync('bio.txt','mybio.txt');                       // rename file 

// fs.unlinkSync('mybio.txt');                                 // delete file
