module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        ingredientId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        ingredientName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAlcoholic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
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
    return Ingredient;
}