module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        categoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
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
    });
    return Category;
}