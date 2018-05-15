module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        reviewId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        drinkID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
        review: DataTypes.TEXT,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
    });
    return Review;
}