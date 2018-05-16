module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passKey: {
            type: DataTypes.STRING,
            allowNull: false
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
    });
    // //This authenticates the password when the user logs in
    // User.prototype.validatePassKey = function(passKey) {
    //     return bcrypt.compareSync(passKey, this.passKey);
    // };

    return User;
}