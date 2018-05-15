module.exports = function(sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
        userId: DataTypes.INTEGER,
        friendId: DataTypes.INTEGER,
        isAccepted: DataTypes.BOOLEAN
    });
    return Friend;
}