module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        placeId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        isPrivate: DataTypes.BOOLEAN,
        createdBy: DataTypes.INTEGER
    });
    return Place;
}