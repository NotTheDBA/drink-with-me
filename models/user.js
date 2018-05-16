module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        passKey: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        gravatar: {
            type: DataTypes.STRING,
            allowNull: true //TODO: Gravatar: Change this to false when gravatar is implemented
        }
    });


    return User;
}