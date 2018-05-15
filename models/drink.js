module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
        drinkId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: DataTypes.STRING,
        drinkName: DataTypes.STRING,
        placeId: DataTypes.INTEGER,
        isAlcoholic: DataTypes.BOOLEAN,
        isCustom: DataTypes.BOOLEAN,
        isRetired: DataTypes.BOOLEAN,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        cocktailDbId: DataTypes.INTEGER
    });
    return Drink;
}