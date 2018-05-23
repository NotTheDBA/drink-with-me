'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// db.User.belongsToMany(db.User, { through: 'Friend' });
// db.Friend.belongsToMany(db.User, { through: 'Friend' });
// db.Ingredient.belongsTo(db.Category);


db.sequelize = sequelize;
db.Sequelize = Sequelize;


// db.Member.belongsToMany(db.Opportunity, {through: 'MemberOpportunity'});
// db.Opportunity.belongsToMany(db.Member, {through: 'MemberOpportunity'});


module.exports = db;