module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define("Part", {
        partId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        drinkId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ingredientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isOptional: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Part;
}