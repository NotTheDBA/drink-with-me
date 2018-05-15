module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        ingredientId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        IngredientName: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
        isAlcoholic: DataTypes.BOOLEAN,
        isCustom: DataTypes.BOOLEAN,
        isRetired: DataTypes.BOOLEAN,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        cocktailDbId: DataTypes.INTEGER
    });
    return Ingredient;
}