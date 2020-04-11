const path = require("path");

const express = require("express");

const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const staticRoutes = require("./routes/static");

const errorController = require("./controllers/404");

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(staticRoutes);

app.use(errorController.get404);

app.listen(2020, (req, res)=>{
    console.log("Node server listening on 2020");
});