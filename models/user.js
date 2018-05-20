module.exports = function(sequelize, Sequelize) {

        var User = sequelize.define('user', {

            userId: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            firstname: {
                type: Sequelize.STRING,
                notEmpty: true
            },

            lastname: {
                type: Sequelize.STRING,
                notEmpty: true
            },

            //         displayName: {
            //             type: Sequelize.STRING,
            //             notEmpty: true
            //         },

            username: {
                type: Sequelize.STRING
                    //             ,
                    //             notEmpty: true
            },

            gravatar: {
                type: Sequelize.STRING
            },

            email: {
                type: Sequelize.STRING,
                validate: {
                    isEmail: true
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            last_login: {
                type: Sequelize.DATE
            },

            status: {
                type: Sequelize.ENUM('active', 'inactive'),
                defaultValue: 'active'
            }


        });

        // User.associate = function(models) {
        //     // associations can be defined here
        // };

        return User;

    }
    // module.exports = function(sequelize, DataTypes) {
    //     var User = sequelize.define("User", {
    //         userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    //         email: {
    //             type: DataTypes.STRING,
    //             unique: true,
    //             allowNull: false,
    //             validate: {
    //                 notEmpty: true
    //             }
    //         },
    //         userName: {
    //             type: DataTypes.STRING,
    //             unique: true,
    //             allowNull: false,
    //             validate: {
    //                 notEmpty: true
    //             }
    //         },
    //         displayName: {
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //             validate: {
    //                 notEmpty: true
    //             }
    //         },
    //         passKey: {
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //             validate: {
    //                 notEmpty: true
    //             }
    //         },
    //         gravatar: {
    //             type: DataTypes.STRING,
    //             allowNull: true //TODO: Gravatar: Change this to false when gravatar is implemented
    //         }
    //     });


//     return User;
// }