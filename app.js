const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(2020);