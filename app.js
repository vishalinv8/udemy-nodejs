const path = require("path");

const express = require("express");

const app = express();

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.adminRoutes);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(2020);