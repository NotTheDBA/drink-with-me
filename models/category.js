'use strict';
module.exports = (sequelize, DataTypes) => {
    var Category = sequelize.define('Category', {
        general: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        specific: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        cocktailDbId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {});
    Category.associate = function(models) {
        // associations can be defined here
    };
    return Category;
};