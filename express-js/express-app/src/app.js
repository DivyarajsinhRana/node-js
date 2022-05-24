const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath));

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