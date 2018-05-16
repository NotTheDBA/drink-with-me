module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        reviewId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        drinkID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1, max: 5 }
        },
        review: {
            type: DataTypes.TEXT,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [25, 500]
            }
        },
        createdBy: {
            type: DataTypes.INTEGER, //userid
            allowNull: false
        },
        updatedBy: {
            type: DataTypes.INTEGER, //userid
            allowNull: false
        }
    });
    return Review;
}