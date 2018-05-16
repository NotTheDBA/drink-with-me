module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        categoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        general: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        specific: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
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