const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const staticRoutes = require("./routes/static");
const errorController = require("./controllers/404");
const mongoConnect = require('./utils/database').mongoConnect;

// const Product = require('./models/product');
const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    User.findUserById('5ead9dd38ef2734bfc6194f1')
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err =>{
        console.log(err);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(staticRoutes);
app.use(errorController.get404);
mongoConnect(()=>{
    app.listen(2020);
});
