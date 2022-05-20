//JSON in Nodejs

// task:
//1:convert to JSON 
//2:dusre file me add krdena 
//3:readfile
//4:again convert back to js obj ori

const fs = require('fs')
const data = {
    name:'ram',
    age:'31',
    role:'admin'
}
console.log('object data......???',data);    
const jsonData = JSON.stringify(data)                //convert json
console.log('json data.......???',jsonData);

fs.writeFile('jsonfile.json',jsonData,(err)=>{
    console.log(err)
});                                                  // add json data in new file

fs.readFile('jsonfile.json',"utf-8",(e,data)=>{
    if(e){
        throw e
    }
    else {
        console.log('read json data.....???',data)
        const readData = JSON.parse(data);
        console.log('read json data into object........??',readData); // convert json into object
        return data
    }
})                                                  // read data from json file





