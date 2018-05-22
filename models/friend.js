module.exports = function(sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
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
    });

    // Friend.belongsToMany(User);

    // Project.belongsToMany(User, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId' })
    return Friend;
}