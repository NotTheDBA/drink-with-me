module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
        drinkId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        drinkName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAlcoholic: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        isCustom: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isRetired: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdBy: {
            type: DataTypes.INTEGER, //userid
            allowNull: false
        },
        updatedBy: {
            type: DataTypes.INTEGER, //userid
            allowNull: false
        },
        cocktailDbId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return Drink;
}