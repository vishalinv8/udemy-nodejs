const path = require("path");

const express = require("express");

const app = express();

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const bodyParser = require('body-parser');

const errorController = require("./controllers/404");

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/admin', adminData.adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(2020);