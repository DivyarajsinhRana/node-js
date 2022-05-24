const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('welcome to home page');
})

app.listen(8000,()=>{
    console.log("server run on port 8000")
});