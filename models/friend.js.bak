module.exports = function(sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            friendId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            isAccepted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }

    );

    return Friend;
}