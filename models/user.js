module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        displayName: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        passKey: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        gravatar: {
            type: DataTypes.STRING,
            allowNull: true //TODO: Change this to false when gravatar is implemented
        }
    });

    //TODO: User password encryption
    // //Requiring bcrypt for password hashing. Using the bcrypt-nodejs version
    // //as the regular bcrypt module sometimes causes errors on Windows machines
    // var bcrypt = require("bcrypt-nodejs");
    // //This encrypts the password as it's being saved
    User.hook("beforeCreate", function(user) {
        //     user.passKey = bcrypt.hashSync(user.passKey, bcrypt.genSaltSync(10), null);
        //TODO: add gravatar hash
        //TODO: default username to email
        //TODO: default diplay name to username (if username is email, truncate at the @ symbol)
    });
    // //This authenticates the password when the user logs in
    // User.prototype.validatePassKey = function(passKey) {
    //     return bcrypt.compareSync(passKey, this.passKey);
    // };

    return User;
}