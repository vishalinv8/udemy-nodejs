const express = require("express");
const app = express(); 


app.use('/', (req, res, next)=>{
    console.log("This Always Runs!");
    next();
});



app.use('/add-product', (req, res, next) => {
    res.send(`<h1>Add product form</h1>`);
});

app.use('/', (req, res, next) => {
    res.send(`<h1> Home page </h1>`);
});

app.listen(2020);
