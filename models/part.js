module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Part", {
        partId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        drinkID: DataTypes.INTEGER,
        ingredientID: DataTypes.INTEGER,
        isOptional: DataTypes.BOOLEAN
    });
    return Part;
}