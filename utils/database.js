const Sequelize = require('sequelize');

const sequelize = new Sequelize('udemy-nodejs', 'root', '', {
    dialect: 'mysql', 
    host:'localhost'
});

module.exports = sequelize;