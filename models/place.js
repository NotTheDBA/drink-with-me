module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        placeId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        placeName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isPrivate: {
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
        }
    });
    return Place;
}