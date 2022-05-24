const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('<h1>welcome to home page</h1>');  // html
});

app.get('/about',(req,res)=>{
    res.status(200).send('welcome to about page')  //text
}); 
app.get('/contact',(req,res)=>{
    res.send('welcome to contact page')
});
app.get('/user',(req,res)=>{
    res.send({"username":"Ram","password":"123"})           //json
});

app.listen(port,()=>{
    console.log(`server run on port ${port}`)
});