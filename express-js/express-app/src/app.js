const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
// server static html 
// const staticPath = path.join(__dirname,'../public')    // absolute file path
// app.use(express.static(staticPath));      // built in middleware

// server dynamic html using template engines
const templatePath = path.join(__dirname,'../src/template')
app.set('view engine', 'hbs');
app.set('views',templatePath)      // rename views folder to template  

app.get('/', (req, res) => {
    res.render('index', { channel: 'divyaraj' });  // hbs file(index.hbs inside views directory)
});
app.get('/', (req, res) => {
    res.send('<h1>welcome to home page</h1>');  // html
});

app.get('/about', (req, res) => {
    res.status(200).send('welcome to about page')  //text
});
app.get('/contact', (req, res) => {
    res.send('welcome to contact page')
});
app.get('/user', (req, res) => {
    res.send({ "username": "Ram", "password": "123" })           //json
});
app.listen(port, () => {
    console.log(`server run on port ${port}`)
});