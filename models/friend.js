module.exports = function(sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
            // userId: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false
            // },
            // friendId: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false
            // },
            isAccepted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }
        // , {
        //     classMethods: {
        //         associate: function(models) {
        //             // Friend.belongsTo(models.User, {
        //             //     // through: {
        //             //     //     model: User.id
        //             //     // },
        //             //     // foreignKey: 'fk_friendId',
        //             //     // targetKey: 'friendId'
        //             // // })
        //             // models.User.hasMany(Friend)

        //             // Friend.belongsToMany(models.User, {
        //             //     through: {
        //             //         model: User.id
        //             //     },
        //             //     foreignKey: 'userId',
        //             // })
        //         }
        //     }
        // }
    );

    // Friend.associate = function(models) {

    //         Friend.belongsTo(models.User, { as: 'isFriend', foreignKey: 'friendId' });
    //         // Friend.belongsTo(models.User, { as: 'hasFriend', foreignKey: 'userId' });
    //     }
    // Friend.associate = function(models) {
    //     Friend.belongsTo(User, { as: 'friend' })
    //         // Friend.belongsToMany(models.User)
    //         // associations can be defined here
    // };
    // Friend.associate = function(models) {
    //     Friend.hasMany(models.User)

    // };

    return Friend;
}