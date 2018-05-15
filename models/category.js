module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        categoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        general: DataTypes.STRING,
        specific: DataTypes.STRING,
        cocktailDbId: DataTypes.INTEGER
    });
    return Category;
}