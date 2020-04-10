const path = require("path");

const express = require("express");

const app = express();

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

/*app.set('view engine', 'pug');*/

/*
const expressHBS = require("express-handlebars");
app.engine("hbs", expressHBS());
app.engine('hbs',expressHBS({layoutsDir:'views/layouts/', defaultLayout:'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');*/

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminData.adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    /*res.status(404).sendFile(path.join(__dirname, "views", "404.html"));*/
    res.status(404).render('404', {pageTitle:"404 Error"});
});

app.listen(2020);