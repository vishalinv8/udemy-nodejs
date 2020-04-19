const path = require("path");

const express = require("express");

const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const staticRoutes = require("./routes/static");

const errorController = require("./controllers/404");

const sequelize = require('./utils/database');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
      })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(staticRoutes);
app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

//sequelize.sync({force: true})
sequelize.sync()
    .then((results)=>{
        return User.findByPk(1);
    })
    .then((user)=>{
        if(!user){
            return User.create({name:"Vishal",email:"vishal@mail.com"});
        }
        return user;
    })
    .then((user)=>{
        return user.createCart();
    })
    .then((cart)=>{
        app.listen(2020);    
    }).catch((error)=>{
        console.log(error);
    });